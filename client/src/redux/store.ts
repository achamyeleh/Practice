import { createStore } from 'redux'
import countReducer from './counter/counterReducer'

const state = createStore(countReducer)
export default state

