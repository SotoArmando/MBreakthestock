
import defaultreducer from './default';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  news: defaultreducer('news'),
  events: defaultreducer('events'),
  forex: defaultreducer('forex'),
  crypto: defaultreducer('crypto'),
  state: defaultreducer('state'),
},{
  news: [],
  events: [],
  forex: [],
  crypto: [],
  state: [],
})

export { rootReducer }