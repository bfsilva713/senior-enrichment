import axios from 'axios'
import { thunkMiddleware } from 'redux-thunk'


const GET_CURRENT_STUDENT = 'GET_CURRENT_STUDENT'
const GET_CURRENT_CAMPUS = 'GET_CURRENT_CAMPUS'


export const getCurrentStudent = (student) => { return { type: GET_CURRENT_STUDENT, student } }
export const getCurrentCampus = (campus) => { return { type: GET_CURRENT_CAMPUS, campus } }


export function fetchStudent(studentId) {
  return function thunk(dispatch) {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(currentStudent => {
        const action = getCurrentStudent(currentStudent)
        dispatch(action)
      })
  }
}

export function fetchCampus(campus) {
  return function thunk(dispatch) {
    axios.get(`/api/campuses/${campus.id}`)
      .then(res => res.data)
      .then(currentCampus => {
        const action = getCurrentCampus(currentCampus)
        dispatch(action)
      })
  }
}

export default function currentReducer(state = {}, action) {
  switch(action.type) {
    case GET_CURRENT_STUDENT:
      return Object.assign({}, state, { current: action.student })
    case GET_CURRENT_CAMPUS:
      return Object.assign({}, state, { current: action.campus })
    default: return state;
  }
}
