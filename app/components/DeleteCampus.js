import React from 'react'
import { connect } from 'react-redux'
import { deleteCampus } from '../reducers'
import { withRouter } from 'react-router-dom'

export function DeleteCampus(props) {

  return(
    <div>
      <button onClick={props.removeCampus}>
        Delete Campus
      </button>
    </div>
  )
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeCampus(event){
      event.preventDefault();
      dispatch(deleteCampus(ownProps.campus, ownProps.history));
    }
  }
}

const deleteCampusContainer = withRouter(connect(null, mapDispatchToProps)(DeleteCampus))

export default deleteCampusContainer
