export default function news(state = [], action) {
    const {news} = action;
    switch (action.type) {
      case 'news/add':
        
        return [...state, {...news, id: state.length}];
      default:
        return state;
    }
  }