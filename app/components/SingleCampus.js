import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteCampus from './DeleteCampus'
import EditCampus from './EditCampus'


export function SingleCampus(props) {
  const campusId = Number(props.match.params.campusId)
  const campus = props.campus.find(campusItem => campusItem.id === campusId);
  const students = props.students.filter(student => student.campusId ===  campusId);

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

const mapStateToProps = (state) => {

  return {
    campus: state.campusReducer,
    students: state.studentReducer
  }
}

const singleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default singleCampusContainer
