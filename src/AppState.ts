import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.ts"
import { Account } from './models/Account.js'
import { Identity } from '@bcwdev/auth0provider-client'
import { Movie } from './models/Movie.ts'


class ObservableAppState {

  identity: Identity | null = null
  account: Account | null = null

  movies: Movie[] = []
  activeMovie: Movie | null = null
  currentPage: number = 0
  totalPages: number = 0
  totalResults: number = 0
  query: string = ''

  constructor() {
    makeAutoObservable(this)
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop: string) {
    isValidProp(target, prop)
    // @ts-ignore
    return target[prop]
  },
  set(target, prop: string, value) {
    isValidProp(target, prop)
    action(() => {
      // REVIEW auto emits on change
      // @ts-ignore
      target[prop] = value
    })()
    return true
  }
})