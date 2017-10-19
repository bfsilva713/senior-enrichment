import { thunkMiddleware } from 'redux-thunk';
import axios from 'axios'


//ACTIONS

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'


//ACTION CREATORS

export const getStudents = (students) => { return { type: GET_STUDENTS, students } }
export const getStudent = (student) => { return { type: GET_STUDENT, student } }
export const removeStudent = (student) => { return { type: REMOVE_STUDENT, student } }
export const updateStudent = (student) => { return { type: UPDATE_STUDENT, student } }


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
  console.log('STUDENT IS', student)
  return function thunk(dispatch) {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        console.log('NEW STUDENT IS', newStudent)
        const action = getStudent(newStudent);
        dispatch(action)
        // dispatch(fetchStudents())
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


//REDUCER

export default function studentReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students })
    case GET_STUDENT:
      return Object.assign({}, state, { students: [...state.students, action.student] })
    case REMOVE_STUDENT:
      return Object.assign({}, state, { students: state.students.filter(student => student.id !== action.student.id) })
    default: return state;
  }
}
