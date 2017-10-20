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
          Image:
          <input
            name='image'
            placeholder='Image URL'
          />
        </label>
        {/* props.setCampus comes from student-add form on SingleCampus page - ignoring campus selection */ }
        { !props.setCampus && (
              <label className='campus-add-field'>
              Campus:
              <select name='campus'>
                {props.campuses.map(campus =>
                  <option key={campus.id}>{campus.name}</option>
                )}
              </select>
            </label>
          )
        }

        <button className='myButton'> Add Student! </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    campuses: state.campusReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitStudent(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      //if setCampus was passed down from SingleCampus page, use that as campus; else use selected campus
      const campusName = ownProps.setCampus ? ownProps.setCampus.name : event.target.campus.value
      let image = event.target.image.value;

      if(image === '') image = `/images/profile/profile${Math.ceil(Math.random()*26)}.png`;
      if(!name || !email) alert('Name and email cannot be empty');
      else dispatch(postStudent({ name, email, image, campusName }))
    }
  }
}

const addStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent)

export default addStudentContainer
