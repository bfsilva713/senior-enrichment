import React from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../reducers'

export function AddStudent(props) {
  return (
    <div>
      <form
        id='add-student'
        onSubmit={props.submitStudent}
      >
        <label>
          Name:
          <input
              name='name'
              placeholder='Student Name'
          />
        </label>
        <label>
          Email:
          <input
            name='email'
            placeholder='E-mail address'
          />
        </label>
        <label>
          Campus:
          <select name='campus'>
            {props.campuses.map(campus =>
              <option key={campus.id}>{campus.name}</option>
            )}
          </select>

        </label>
        <button className='myButton'> + </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    campuses: state.campusReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitStudent(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const campusName = event.target.campus.value;
      console.log('CAMPUS IS', campusName)
      dispatch(postStudent({ name, email, campusName }))
    }
  }
}

const addStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent)

export default addStudentContainer
