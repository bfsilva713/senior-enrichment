import React from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../reducers'

export function AddCampus(props) {
  return (
    <div>
      <form
        id='add-campus'
        onSubmit={props.submitCampus}
      >
        <button>+</button>
        <input name='newCampus' placeholder='Add a campus' />
      </form>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {}
// }

const mapDispatchToProps = dispatch => {
  return {
    submitCampus(event){
      event.preventDefault();
      dispatch(postCampus({name: event.target.newCampus.value}))
    }
  }
}

const addCampusContainer = connect(null, mapDispatchToProps)(AddCampus)
export default addCampusContainer

