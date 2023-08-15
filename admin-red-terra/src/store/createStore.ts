import { configureStore } from '@reduxjs/toolkit'

const createStore = (reducer: any, middlewares: any): any =>
  configureStore({ reducer, middleware: middlewares })

export default createStore
