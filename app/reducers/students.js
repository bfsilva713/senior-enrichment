import { thunkMiddleware } from 'redux-thunk';
import axios from 'axios'


//ACTIONS

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_FROM_CAMPUS = 'DELETE_FROM_CAMPUS'


//ACTION CREATORS

export const getStudents = (students) => { return { type: GET_STUDENTS, students } }
export const getStudent = (student) => { return { type: GET_STUDENT, student } }
export const removeStudent = (student) => { return { type: REMOVE_STUDENT, student } }
export const updateStudent = (student) => { return { type: UPDATE_STUDENT, student } }
export const deleteFromCampus = (campusId) => { return { type: DELETE_FROM_CAMPUS, campusId } }


//THUNKS

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
  }
}

export function postStudent(student) {
  return function thunk(dispatch) {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action)
      })
  }
}

export function deleteStudent(student, history) {
  return function thunk(dispatch) {
    const action = removeStudent(student)
    dispatch(action)
    axios.delete(`/api/students/${student.id}`)
      .then(() => {
        history.push('/')
      })
  }
}

export function editStudent(studentId, edit, history) {
  return function thunk(dispatch) {
    axios.put(`/api/students/${studentId}`, edit)
    .then(res => res.data)
    .then(updatedStudent => {
      const action = updateStudent(updatedStudent)
      dispatch(action)
      history.push(`/students/${studentId}`)
      fetchStudents()
      })
  }
}


//REDUCER

export default function studentReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case GET_STUDENT:
      return [...state, action.student]
    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.student.id)
    case UPDATE_STUDENT:
      return [...state.filter(student => student.id !== action.student.id), action.student]
    case DELETE_FROM_CAMPUS:
      return state.filter(student => student.campusId !== action.campusId)
    default: return state;
  }
}
