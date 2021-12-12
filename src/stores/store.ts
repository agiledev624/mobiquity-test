import { State } from './state'
import { Actions, actions } from './actions'
import { ListData } from './models'
import { extendObservable } from 'mobx'

const initialState: (data: {} | void) => State = (data = {}) => ({
  winners: [],
  loading: false,
})

export class Store implements State, Actions {
  constructor() {
    extendObservable(this, {
      ...initialState(),
      ...actions(this),
    })
  }

  winners!: ListData[]
  setWinners!: (data: ListData[]) => void
  loading!: boolean
  setLoading!: (loading: boolean) => void
}

export const store = new Store()

export function createStore() {
  return store
}
