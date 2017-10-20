import React from 'react'
import { connect } from 'react-redux'
import { editCampus } from '../reducers'
import { withRouter } from 'react-router-dom'

export function EditCampus(props) {
  return (
    <div>
      <form onSubmit={props.submitEdit}>
        <label> Name:
      <input name='name' />
        </label>
        <label> Image:
      <input name='image' />
        </label>
        <button>Edit Info</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const edit = {};
  const campusId = Number(ownProps.match.params.campusId)
  return {
    submitEdit(event) {
      event.preventDefault()
      if (event.target.name.value) {
        edit.name = event.target.name.value
      }
      if (event.target.image.value) edit.image = event.target.image.value
      dispatch(editCampus(campusId, edit))
    }
  }
}

const EditCampusContainer = withRouter(connect(null, mapDispatchToProps)(EditCampus))

export default EditCampusContainer
