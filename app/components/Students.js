import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AddStudent from './AddStudent'


export function Students(props) {
  return (
    <div id='student-listing'>
      <div>
        <h2>Student Listing</h2>
        <ul id='student-ul'>
          {props.students.map(student => {
            return (
              <li key={student.id}>
                <div className='student-list'>
                  <Link to={`/students/${student.id}`}>
                    {student.name}
                  </Link>
                  <img className='icon' src={student.image} />
                </div>
              </li>
            )
          })}
        </ul>
        <AddStudent />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.studentReducer
  }
}

const StudentContainer = withRouter(connect(mapStateToProps)(Students))
export default StudentContainer
