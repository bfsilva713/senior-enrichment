import React from 'react'
import { connect } from 'react-redux'
import { deleteStudent } from '../reducers'
import { withRouter } from 'react-router-dom'

export function DeleteStudent(props) {
console.log('INSIDE DELETE STUDENT, PROPS ARE ', props)
  return(
    <div>
      <button onClick={props.removeStudent}>
        Delete Student
      </button>
    </div>
  )
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeStudent(event){
      console.log('INSIDE REMOVE STUDENT', ownProps.student.id)
      event.preventDefault();
      dispatch(deleteStudent(ownProps.student.id, ownProps.history));
    }
  }
}

const deleteStudentContainer = withRouter(connect(null, mapDispatchToProps)(DeleteStudent))

export default deleteStudentContainer
