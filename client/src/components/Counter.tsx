import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

function Counter(props: any) {
  const incrementt = () => {
    props.dispatch({
      type: "INCREMENT"
    });
  };

  const decrementt = () => {
    props.dispatch({
      type: "DECREMENT"
    });
  };

  const incrementtBy5 = () => {
    props.dispatch({
      type: "INCREMENTBY5"
    });
  };

  return (
    <div className="counter">
      <h1>{props.count}</h1>
      <Button className="primary" onClick={incrementt}>+</Button>
      <Button className="secondary" onClick={()=>props.dispatch({ type: "DECREMENT"})}> -</Button>
      <Button className="success" onClick={incrementtBy5}>+5</Button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { 
    count: state.count 
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return { 
//     dispatch: () => dispatch(increment())
//   }
// }

export default connect(
  mapStateToProps
  )(Counter)

