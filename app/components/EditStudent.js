import React from 'react'
import { connect } from 'react-redux'
import { editStudent } from '../reducers'
import { withRouter } from 'react-router-dom'

export function EditStudent(props) {
  return(
    <div>
      <form onSubmit={props.submitEdit}>
        <button>Edit Info</button>
        <label> Name:
          <input name='name' />
        </label>
        <label> E-mail:
          <input name='email' />
        </label>
        <label> Image:
          <input name='image' />
        </label>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const edit = {};
  const studentId = Number(ownProps.match.params.studentId)
  return {
    submitEdit(event){
      event.preventDefault()
      if(event.target.name.value) {
        edit.name = event.target.name.value
      }
      if(event.target.email.value) {
        edit.email = event.target.email.value
      }
      if(event.target.image.value) edit.image = event.target.image.value
      dispatch(editStudent(studentId, edit))
    }
  }
}

const EditStudentContainer = withRouter(connect(null, mapDispatchToProps)(EditStudent))

export default EditStudentContainer
