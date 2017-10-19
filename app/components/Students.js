import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'


export function Students(props) {
  console.log('PROPS IN STUDENTS IS', props)
  return (
    <div id='student-listing'>
    <div>
    <h2>Student Listing</h2>
    <AddStudent />
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.studentReducer.students
  }
}

const StudentContainer = withRouter(connect(mapStateToProps)(Students))
export default StudentContainer
