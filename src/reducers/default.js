export default function defaultreducer(name) {
  return function events(state = {}, action) {
    const { key, payload } = action;
    switch (action.type) {
      case name+'/add':
        return { ...state, [key]: { ...payload, id: state.length } };
      case name+'/bulk':
        return { ...state, ...payload };
      default:
        return state;
    }
  }
}

