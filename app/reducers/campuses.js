import { thunkMiddleware } from 'redux-thunk';
import { deleteFromCampus } from '../reducers'
import axios from 'axios'


//ACTIONS

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'


//ACTION CREATORS

export const getCampuses = (campuses) => { return { type: GET_CAMPUSES, campuses } }
export const getCampus = (campus) => { return { type: GET_CAMPUS, campus } }
export const removeCampus = (campus) => { return { type: REMOVE_CAMPUS, campus } }
export const updateCampus = (campus) => { return { type: UPDATE_CAMPUS, campus } }


//THUNKS

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
        const studentAction = deleteFromCampus(campus.id)
        dispatch(studentAction)
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


//REDUCER

export default function campusReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case GET_CAMPUS:
      return [...state, action.campus]
    case REMOVE_CAMPUS:
      return state.filter(campus => campus.id !== action.campus.id)
    case UPDATE_CAMPUS:
      return [...state.filter(campus => campus.id !== action.campus.id), action.campus]
    default: return state;
  }
}
