import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DeleteCampus from './DeleteCampus'
import EditCampus from './EditCampus'
import AddStudent from './AddStudent'
import { deleteStudent } from '../reducers'


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
              <img src={campus.image} />
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
                  <span>
                    <Link to={`/students/${student.id}`}>
                      {student.name}
                    </Link>
                    <button
                      onClick={props.deleteStudent}
                      value={student.id}
                    >
                      X
                    </button>
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <DeleteCampus campus={campus} />
      <EditCampus campus={campus} />
      <AddStudent setCampus={campus} />
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    campus: state.campusReducer,
    students: state.studentReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent(event) {
      event.preventDefault()
      const deleteStudentId = event.target.value;
      dispatch(deleteStudent(deleteStudentId, ownProps.history))
    }
  }
}

const singleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
export default singleCampusContainer
