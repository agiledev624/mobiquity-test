import { observer } from 'mobx-react-lite'
import { useStore } from '../..'
import { ListData } from '../../stores/models'

export const WinnerList = observer(() => {
  const store = useStore()
  const { loading, winners } = store
  return (
    <div className="list-group winner-list">
      {loading
        ? 'Loading'
        : winners.map((m: ListData) => (
            <span
              key={m.round}
              className={`list-group-item list-group-item-action ${
                m.isActive == true ? 'active' : ''
              }`}>
              {m.season +
                ' ' +
                m.round +
                ' ' +
                m.driverName +
                '(' +
                m.raceName +
                ')'}
            </span>
          ))}
    </div>
  )
})
