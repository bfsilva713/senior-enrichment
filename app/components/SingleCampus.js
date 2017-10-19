import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteCampus from './DeleteCampus'
import EditCampus from './EditCampus'


export function SingleCampus(props) {

  const campus = props.campus;
  const students = props.students.filter(student => student.campusId === campus.id);


  return(
    <div>
      <div id='campus-info'>
        <h2>{campus.name}</h2>

        <img src={`../images/${campus.image}`} />
      </div>

      <div id='campus-student-info'>
        <h3>Students</h3>
        <ul>
          {students.map(student => {
            return (
              <li key={student.id}>
              <Link to={`/students/${student.id}`}>{student.name}</Link>
            </li>
            )
          })}
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

  return {
    campus: state.campusReducer.campuses.find(campus => campus.id === campusId),
    students: state.studentReducer.students
  }
}

const singleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default singleCampusContainer
