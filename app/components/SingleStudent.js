import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteStudent from './DeleteStudent'


export function SingleStudent(props) {



  console.log('PROPS IN SINGLE STUDENT ARE', props)

  const student = props.student;
  const campus = {id: 1, name: 'bre'}
  // const campusId = props.student.campusId;


  return(
    <div>
      <div id='student-info'>
        <h2>{}</h2>
        <p> {} </p>
      </div>

      <div id='student-campus-info'>
        <h4>
        <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        </h4>
      </div>
      <DeleteStudent student={student} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const studentId = Number(ownProps.match.params.studentId)
  console.log('student ID IS', studentId)
  console.log('STATE LOOKS LIKE', state)

  return {
    student: state.studentReducer.find(student => student.id === studentId),
    // campus: state.studentReducer.students.find(student => student.id === studentId).campus
  }
}


// const mapDispatchToProps = dispatch => {
//   const student =
//   return {
//     fetchStudent(student){

//     }
//   }
// }

const singleStudentContainer = withRouter(connect(mapStateToProps)(SingleStudent))
export default singleStudentContainer

