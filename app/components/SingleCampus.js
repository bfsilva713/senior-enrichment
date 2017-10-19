import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteCampus from './DeleteCampus'
import EditCampus from './EditCampus'


export function SingleCampus(props) {
  const campusId = Number(props.match.params.campusId)
  const campus = props.campus.find(campusItem => campusItem.id === campusId);
  const students = props.students.filter(student => student.campusId ===  campusId);

  console.log('CAMPUS', campus)

  return (
    <div>
      <div id='campus-info'>
        {
          campus && (
            <div>
              <h2>{campus.name}</h2>
              <img src={`/images/${campus.image}`} />
            </div>
          )
        }

      </div>

      <div id='campus-student-info'>
        <h3>Students</h3>
        <ul>
          {
            students.map(student => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>{student.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <DeleteCampus campus={campus} />
      <EditCampus campus={campus} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const campusId = Number(ownProps.match.params.campusId)
  console.log('CAMPUS ID IS', campusId)
  console.log('STATE LOOKS LIKE', state)
  console.log('STATE-CAMPUS-REDUCER', state.campusReducer)

  return {
    campus: state.campusReducer,
    students: state.studentReducer
  }
}

const singleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default singleCampusContainer
