import React from 'react'
import { connect } from 'react-redux'
import { deleteStudent } from '../reducers'
import { withRouter } from 'react-router-dom'

export function DeleteStudent(props) {
  console.log('INSIDE DELETE STUDENT FUNCTION')
  console.log('PROPS ARE', props)
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
      console.log('INSIDE REMOVESTUDENT EVENT HANDLER')
      event.preventDefault();
      dispatch(deleteStudent(ownProps.student.id, ownProps.history));
      console.log('DISPATCHED DELETE')
    }
  }
}

const deleteStudentContainer = withRouter(connect(null, mapDispatchToProps)(DeleteStudent))

export default deleteStudentContainer
