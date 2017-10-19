import React from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../reducers'

export function AddCampus(props) {
  return (
    <div id='add-campus'>
      <form onSubmit={props.submitCampus}>
        <button>+</button>
        <input name='newCampus' placeholder='Add a campus' />
        <input name='newCampusImg' placeholder='Image URL' />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    submitCampus(event){
      event.preventDefault();
      dispatch(postCampus({name: event.target.newCampus.value, image: event.target.newCampusImg.value}))
    }
  }
}

const addCampusContainer = connect(null, mapDispatchToProps)(AddCampus)
export default addCampusContainer

