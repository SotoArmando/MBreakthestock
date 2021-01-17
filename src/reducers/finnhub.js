export default function finnhub(state = {}, action) {
    const {finnhub,key} = action;
    switch (action.type) {
      case 'finnhub/fetch':
        return {...state,[key]: finnhub};
      default:
        return state;
    }
  }