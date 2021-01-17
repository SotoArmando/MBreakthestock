import { createStore } from 'redux'
import {rootReducer, appState} from './reducersindex'

const store = createStore(rootReducer,appState)

export default store;