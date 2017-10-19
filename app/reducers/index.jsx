import { combineReducers } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import axios from 'axios'
import studentReducer from './students'
import campusReducer from './campuses'


export const initialState = {
  students: [],
  currentStudent: {},
  campuses: [],
  // currentCampus: {},
  // entryField: ""
}



export const getCampuses = (campuses) => { return { type: GET_CAMPUSES, campuses } }
export const getCampus = (campus) => { return { type: GET_CAMPUS, campus } }
export const removeCampus = (campus) => { return { type: REMOVE_CAMPUS, campus } }
export const updateCampus = (campus) => { return { type: UPDATE_CAMPUS, campus } }
export const getCurrentCampus = (campus) => { return { type: GET_CURRENT_CAMPUS, campus } }

export const newInput = (input) => { return { type: NEW_INPUT, input } }

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
  }
}



export function postCampus(campus) {
  return function thunk(dispatch) {
    axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampus(newCampus)
        dispatch(action)
        // dispatch(fetchCampuses())
      })
  }
}



export function deleteCampus(campus, history) {
  return function thunk(dispatch) {
    const action = removeCampus(campus)
    dispatch(action)
    axios.delete(`/api/campuses/${campus.id}`)
      .then(() => {
        history.push('/')
      })
  }
}


export function editCampus(campus) {
  return function thunk(dispatch) {
    axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(updatedCampus => {
        const action = updateCampus(updatedCampus)
        dispatch(action)
      })
  }
}




export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students })
    case GET_STUDENT:
      return Object.assign({}, state, { students: [...state.students, action.student]})
      case GET_CURRENT_STUDENT:
        return Object.assign({}, state, { currentStudent: action.student})
      case REMOVE_STUDENT:
        return Object.assign({}, state, { students: state.students.filter(student => student.id !== action.student.id)})
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses })
    case GET_CAMPUS:
      return Object.assign({}, state, { campuses: [...state.campuses, action.campus] })
    case REMOVE_CAMPUS:
      return Object.assign({}, state, { campuses: state.campuses.filter(campus => campus.id !== action.campus.id)})
    case UPDATE_CAMPUS:
      return Object.assign({}, state, { campuses: [...state.campuses.filter(campus => campus.id !== action.campus.id), action.campus]})
    default: return state;
  }
}

// case GET_STUDENT:
// return Object.assign({}, state, {students: [...state.students, action.student]})
// case GET_STUDENTS:
// return {
//   ...state,
//   students: action.students
// };
// case REMOVE_STUDENT:
// return {
//   currentStudent: {},
//   students: state.students.filter(student => student.id !== action.student.id)
// };
// case UPDATE_STUDENT:
// return { ...state,
//   currentStudent: action.student
// };
// case GET_CURRENT_STUDENT:
//   return {
//     ...state,
//     currentStudent: action.student
//   }
// case GET_CAMPUS:
// return {
//   ...state,
//   campuses: [...state.campuses, action.campus]
// };
// case GET_CAMPUSES:
// return {
//   ...state,
//   campuses: action.campuses
// };
// case REMOVE_CAMPUS:
// return {
//   currentCampus: {},
//   campuses: state.campuses.filter(campus => campus.id !== action.campus.id)
// };
// case UPDATE_CAMPUS:
// return { ...state,
//   currentCampus: action.campus
// };
// case GET_CURRENT_CAMPUS:
//   return {
//     ...state,
//     currentCampus: action.campus
//   }
// case NEW_INPUT:
//   return {
//     ...state,
//     entryField: action.input
//   }
