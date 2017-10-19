import { combineReducers } from 'redux'
import studentReducer from './students'
import campusReducer from './campuses'
import currentReducer from './current'


const rootReducer = combineReducers({
  studentReducer,
  campusReducer,
  currentReducer
});

export default rootReducer
export * from './students'
export * from './campuses'
export * from './current'
