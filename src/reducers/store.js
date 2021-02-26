import { createStore } from 'redux'
import { rootReducer } from './index'

let initialstate = {
    news: [],
    events: [],
    forex: [],
    crypto: [],
};

const store = createStore(rootReducer,initialstate)

export default store;