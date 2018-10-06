import { combineReducers } from 'redux';
import afReducer from './reducer_af';
import dlReducer from './reducer_dl';

const rootReducer = combineReducers({
  af: afReducer,
  dl: dlReducer
});

export default rootReducer;
