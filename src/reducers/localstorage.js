const loadState = () => {
    try {
      const serializedState = localStorage.getItem('breakthestockstate');
      if (serializedState === null) {
        return undefined;
      }
      return {};
      // return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
}; 

const saveState = (State) => {
    localStorage.setItem('breakthestockstate',State);
}

const thereisState = () => localStorage.hasOwnProperty("breakthestockstate")


export { loadState, saveState, thereisState }