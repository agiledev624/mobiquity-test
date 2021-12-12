/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect } from 'react'
import { css, jsx } from '@emotion/react'
import { observer } from 'mobx-react-lite'
import useSWR from 'swr'
import fetch from 'unfetch'
import { useStore } from './index'
import { Faucet } from './components/Faucet'
import bg from './images/bg.svg'
import './App.css'

const AppHeader = css({
  background: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
})

// const API_URL = 'http://api.exchangeratesapi.io'

// const fetcher = async (path: string) => {
//   const res = await fetch(API_URL + path)
//   const json = await res.json()
//   return json
// }

const App: React.FC = observer(() => {
  // const { data: apiData } = useSWR(
  //   '/v1/latest?base=EUR&access_key=0fb8ab80315cf27ae4855ee9b540021a&symbols=USD,EUR,GBP',
  //   fetcher
  // )
  const store = useStore()
  // useEffect(() => {
  //   console.log(apiData)
  //   store.setRates(apiData?.rates)
  // })

  // if (!apiData) {
  //   return null
  // }

  return (
    <div className="App">
      <header css={AppHeader}>
        <Faucet />
      </header>
    </div>
  )
})

export default App
