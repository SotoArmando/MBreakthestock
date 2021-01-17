import { loadState, saveState, thereisState } from './localstorage'
import symbolsreducer from './symbols';
import finhubreducer from './finnhub';
import { combineReducers } from 'redux'

var appState;

if (thereisState()) {
    appState = loadState();
} else {
    appState = {};
}


const rootReducer = combineReducers({
  symbols: symbolsreducer,
  finnhub: finhubreducer,
})


export { appState,rootReducer }