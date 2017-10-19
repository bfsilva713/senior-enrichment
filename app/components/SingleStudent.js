import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteStudent from './DeleteStudent'
import EditStudent from './EditStudent'


export function SingleStudent(props) {

  const studentId = Number(props.match.params.studentId)
  const student = props.student.find(studentObj => studentObj.id === studentId);
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
      <EditStudent />
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    student: state.studentReducer
  }
}


const singleStudentContainer = withRouter(connect(mapStateToProps)(SingleStudent))
export default singleStudentContainer

