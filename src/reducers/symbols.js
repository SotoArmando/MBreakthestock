export default function symbols(state = {}, action) {
    const {toDo} = action;
    switch (action.type) {
      case 'add': 
        return {...state,...toDo}
      default:
        return state
    }
  }