export default function symbols(state = [], action) {
    const {symbol} = action;
    switch (action.type) {
      case 'symbol/add':
        return [...state, {...symbol, id: state.length}];
      default:
        return state;
    }
  }