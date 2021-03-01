export default function defaultreducer(name) {
  return function (state = {}, action) {
    const { key, payload } = action;
    switch (action.type) {
      case name+'/add':
        
        return { ...state, [key]: { ...payload } };
      case name+'/merge':
          
          return { ...state, ...payload };
      case name+'/bulk':
        return { ...state, ...payload };
      default:
        return state;
    }
  }
}

