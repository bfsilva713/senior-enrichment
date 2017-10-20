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
        <label>
        Campus:
        <select name='campus'>
            <option key='0' />
          {props.campuses.map(campus =>
            <option key={campus.id} value={campus.id}>{campus.name}</option>
          )}
        </select>
      </label>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campusReducer,
  }
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

      if(event.target.campus.value) {
        edit.campusId = Number(event.target.campus.value)
      } else {
        edit.campusId = ownProps.student.campus.id
      }

      dispatch(editStudent(studentId, edit, ownProps.history))
      console.log('EDIT LOOKS LIKE', edit)

    }
  }
}

const EditStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditStudent))

export default EditStudentContainer
