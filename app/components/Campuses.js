import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCampus from './AddCampus'

export function Campuses(props) {
  return (
    <div id='campus-listing'>
      <div>
        <h2>Campus Listing</h2>
        <ul id='campus-ul'>
          {props.campuses.map(campus => {
            return (
              <li key={campus.id}>
                <div className='campus-list'>
                  <Link to={`/campuses/${campus.id}`}>
                    {campus.name}
                  </Link>
                  <img className='icon' src={campus.image} />
                </div>
              </li>
            )
          })}
        </ul>
        <AddCampus />
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
