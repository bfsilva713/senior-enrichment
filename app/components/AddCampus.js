import React from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../reducers'

export function AddCampus(props) {
  return (
    <div id='add-campus'>

      <form
        id='add-campus'
        onSubmit={props.submitCampus}
      >
        <label>
          Name:
          <input
            name='newCampus'
            placeholder='Campus Name'
          />
        </label>
        <label>
          Image:
          <input
            name='newCampusImg'
            placeholder='Image URL'
          />
        </label>
        <button className='myButton'> + </button>

      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    submitCampus(event) {
      event.preventDefault();
      const name = event.target.newCampus.value;
      let image = event.target.newCampusImg.value;

      if(image === '') image = `/images/campuses/default-uni.png`;
      if(!name) alert('Name and email cannot be empty');
      else dispatch(postCampus({ name, image }))
    }
  }
}

const addCampusContainer = connect(null, mapDispatchToProps)(AddCampus)
export default addCampusContainer

