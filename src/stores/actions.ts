import { action } from 'mobx'
import { State } from './state'
import { ListData } from './models'
export interface Actions {
  setWinners: (data: ListData[]) => void
  setLoading: (loading: boolean) => void
}

export const actions = (state: State): Actions => ({
  setLoading: action((loading: boolean) => {
    state.loading = loading
  }),
  setWinners: action((data: ListData[]) => {
    state.winners = data
  }),
})
