import { DECREMENT, INCREMENT, INCREMENTBY5 } from './counterTypes'
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// const logger = require('redux-logger')

export const increment = () => (
  { 
    type:INCREMENT 
  }
  )

export const decrement = () => (
  { 
    type:DECREMENT 
  }
  )

export const incrementBy5 = () => (
  { 
    type: INCREMENTBY5, 
    by: 5
  }
  )
// const rootReducer = combineReducers({count: counterReducer})
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(logger)
// );

// console.log('the store value = ', store.getState())

// store.dispatch({
//   type: 'INCREMENTBY5',
//   amount: 5
// })

// const unsubscribe = store.subscribe(()=> console.log('updated state = ', store.getState()))
// unsubscribe()