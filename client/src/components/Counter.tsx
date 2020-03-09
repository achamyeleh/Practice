import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../redux/counter/counterActions'

function Counter(props: any) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.dispatch}>+</button>
      <button>-</button>
      <button>+5</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { 
    count: state.count 
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return { 
    dispatch: () => dispatch(increment())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Counter)

