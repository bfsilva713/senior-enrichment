import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'


export function Students(props) {
  console.log('PROPS IN STUDENTS IS', props)
  return (
    <div>
      <div id='student-listing'>
        <h2>Student Listing</h2>
        <ul>
          {props.students.map(student => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <AddStudent />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const StudentContainer = connect(mapStateToProps)(Students)
export default StudentContainer
