import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteStudent from './DeleteStudent'
import EditStudent from './EditStudent'


export function SingleStudent(props) {


  const student = props.student
  const campus = student ? student.campus : {}


  return (
    <div>
      {
        student && (
          <div id='student-info'>
            <h2>{student.name}</h2>
            <p> {student.email} </p>
            <img src={student.image} />
          </div>
        )
      }

      {
        campus && (
          <div id='student-campus-info'>
            <h4>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </h4>
          </div>
        )
      }
      <DeleteStudent student={student} />
      <EditStudent student={student} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
const studentId = Number(ownProps.match.params.studentId)
  return {
    student: state.studentReducer.find(studentObj => studentObj.id === studentId)
  }
}


const singleStudentContainer = withRouter(connect(mapStateToProps)(SingleStudent))
export default singleStudentContainer

