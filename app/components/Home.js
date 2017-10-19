import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Students from './Students'
import Campuses from './Campuses'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import { fetchCampuses, fetchStudents } from '../reducers'
import store from '../store'


export default class Home extends Component {

  componentDidMount() {
    const campusThunk = fetchCampuses();
    const studentThunk = fetchStudents();
    store.dispatch(campusThunk)
    store.dispatch(studentThunk)
  }

  render() {
    return(
      <div>
        <div>
          <h3>Welcome to the</h3>
          <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
        <div>
          <p>To continue, please choose a link below:</p>
          <ul id='home-page-links'>
            <li><NavLink to='/campuses'>Campuses</NavLink></li>
            <li><NavLink to='/students'>Students</NavLink></li>
          </ul>
          <Switch>
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/students' component={Students} />
            <Route path='/campuses/:campusId' component={SingleCampus} />
            <Route path='/students/:studentId' component={SingleStudent} />
          </Switch>
        </div>
      </div>
    )
  }
}

