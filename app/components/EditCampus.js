import React from 'react'
import { connect } from 'react-redux'
import editCampus from '../reducers'

export function EditCampus(props) {
  return(
    <div>
      <form>
        <button>Edit Info</button>
        <label> Name:
          <input name='name' />
        </label>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    submitEdit(event){
      event.preventDefault()
      dispatch(editCampus({name: event.target.name.value}))
    }
  }
}

const EditCampusContainer = connect(null, mapDispatchToProps)(EditCampus)

export default EditCampusContainer
