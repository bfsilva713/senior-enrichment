// import React from 'react';

// const GET_STUDENTS = 'GET_STUDENTS'
// const GET_STUDENT = 'GET_STUDENT'
// // const ADD_STUDENT = 'ADD_STUDENT'
// const REMOVE_STUDENT = 'REMOVE_STUDENT'
// const UPDATE_STUDENT = 'UPDATE_STUDENT'
// const GET_CURRENT_STUDENT = 'GET_CURRENT_STUDENT'


// export const initialState = {
//   students: [],
//   currentStudent: {}
// }

// export const getStudents = (students) => { return { type: GET_STUDENTS, students }}
// export const getStudent = (student) => { return { type: GET_STUDENT, student }}
// // export const addStudent = (student) => { return { type: ADD_STUDENT, student }}
// export const removeStudent = (student) => { return { type: REMOVE_STUDENT, student }}
// export const updateStudent = (student) => { return { type: UPDATE_STUDENT, student }}
// export const getCurrentStudent = (student) => { return { type: GET_CURRENT_STUDENT, student }}

// // export function fetchStudents


// export default studentReducer = (state=initialState, action) => {
//   switch(action.type) {
//     case GET_STUDENT:
//       return {
//         ...state,
//         students: [...state.students, action.student]
//       };
//     case GET_STUDENTS:
//       return {
//         ...state,
//         students: action.students
//       };
//     // case ADD_STUDENT:
//     //   return {...state, students: [...state.students, action.student]};
//     case REMOVE_STUDENT:
//       return {
//         currentStudent: {},
//         students: state.students.filter(student => student.id !== action.student.id)
//       };
//     case UPDATE_STUDENT:
//       return { ...state,
//         currentStudent: action.student
//       };
//     case GET_CURRENT_STUDENT:
//         return {
//           ...state,
//           currentStudent: action.student
//         }
//    default: return state;
//   }
// }
