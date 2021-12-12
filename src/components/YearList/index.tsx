import styled from '@emotion/styled'
import axios from '../../services/axios'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../..'
import { ListData } from '../../stores/models'
import Constants from '../../constants'

const fillRange = (start: number, end: number) => {
  let arr = []
  for (let i = start; i <= end; i++) arr.push(i)
  return arr
}

export const YearList = observer(() => {
  const store = useStore()
  const [selectedYear, setYear] = useState(2005)

  useEffect(() => {
    handleClick(selectedYear)
  }, [])

  const handleClick = (year: number) => {
    setYear(year)
    store.setLoading(true)
    const promises = [
      axios.get(`${Constants.apiUrl + year}/driverStandings.json`),
      axios.get(`${Constants.apiUrl + year}.json`),
    ]
    Promise.all(promises).then(([champion, resp]) => {
      let name: string
      if (
        champion.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
          .Driver
      ) {
        name =
          champion.data.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Driver.givenName +
          ' ' +
          champion.data.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Driver.familyName
      }
      if (resp.data.MRData.total) {
        const promises = []
        for (let i = 1; i <= resp.data.MRData.total; i++) {
          promises.push(
            axios.get(`http://ergast.com/api/f1/${year}/${i}/results.json`)
          )
        }
        const data: ListData[] = []
        Promise.all(promises)
          .then((respArr) => {
            respArr.map((e) => {
              const raceData = e.data.MRData.RaceTable.Races[0]
              data.push({
                season: raceData.season,
                round: raceData.round,
                raceName: raceData.raceName,
                driverName:
                  raceData.Results[0].Driver.givenName +
                  ' ' +
                  raceData.Results[0].Driver.familyName,
                isActive:
                  raceData.Results[0].Driver.givenName +
                    ' ' +
                    raceData.Results[0].Driver.familyName ===
                  name,
              })
            })
            store.setLoading(false)
            store.setWinners(data)
          })
          .catch((err) => console.log)
      }
    })
  }
  return (
    <div className="list-group year-list">
      {fillRange(2005, 2021).map((e: number) => (
        <span
          key={e}
          className={`list-group-item list-group-item-action ${
            e == selectedYear ? 'active' : ''
          }`}
          onClick={() => handleClick(e)}>
          {e}
        </span>
      ))}
    </div>
  )
})
