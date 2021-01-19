export default function events(state = {}, action) {
  const {event,key} = action;
  switch (action.type) {
    case 'events/add':
      return {...state, [key]: {...event, id: state.length}};
    case 'events/bulk':
      return {...state, ... event};
    default:
      return state;
  }
}