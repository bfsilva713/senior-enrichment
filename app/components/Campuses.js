import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCampus from './AddCampus'

export function Campuses(props) {
  return (
    <div>
      <div id='campus-listing'>
        <h2>Campus Listing</h2>
        <AddCampus />
        <ul>
          {props.campuses.map(campus => {
            return (
              <li key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  {campus.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campusReducer
  }
}

const CampusContainer = connect(mapStateToProps)(Campuses)
export default CampusContainer
