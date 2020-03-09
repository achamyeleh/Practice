const defaultState = { count: 0 }
const counterReducer = ( state = defaultState, action: any) => {
    switch(action.type) {
      case 'INCREMENT':
        return {...state, count: state.count + 1 }
        break;
      case 'INCREMENT':
        return {...state, count: state.count - 1 }
        break;
      case 'INCREMENTBY5':
        return {...state, count: state.count + 5 }
        break;
      default:
        return state
        break;
    }
  }
  
  export default counterReducer