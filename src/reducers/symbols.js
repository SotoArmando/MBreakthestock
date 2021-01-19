export default function symbols(state = {}, action) {
    const {symbol,key} = action;
    switch (action.type) {
      case 'symbol/add':
        return {...state, [key]: {...symbol, id: state.length}};
      default:
        return state;
    }
  }