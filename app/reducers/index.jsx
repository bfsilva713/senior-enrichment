// import { combineReducers } from 'redux';
// import { thunkMiddleware } from 'redux-thunk';
// import axios from 'axios'
import { combineReducers } from 'redux'
import studentReducer from './students'
import campusReducer from './campuses'
import currentReducer from './current'


// export const initialState = {
//   students: [],
//   currentStudent: {},
//   campuses: [],
// }


// const initialState = {}

const rootReducer = combineReducers({
  studentReducer,
  campusReducer,
  currentReducer
});

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default rootReducer
export * from './students'
export * from './campuses'
export * from './current'
