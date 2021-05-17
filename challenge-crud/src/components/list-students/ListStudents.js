import '../../assets/css/App.css';
import { Link } from 'react-router-dom';
import mockStudents from '../../api';
import React, {Component} from 'react'



class ListStudents extends Component {

  state= {
    students: [],
  }

  async componentDidMount(){
    const response = await mockStudents.get('');
    this.setState({ students: response.data });
  }
  
  render(){

    const { students } = this.state;
    console.log(students);
    return ( 
 
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="card">
            <div className="card-header"> 
            <h2 className="title-table">List Of Students</h2>
            <Link className="btn btn-success btn-round pull-right bt-add" to="/new-student">New Student</Link>
        </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                      <thead className="text-dark">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Weight(KG)</th>
                          <th>Height(M)</th>
                          <th>Edit</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.weight}</td>
                                <td>{student.height}</td>
                                <td key="edit">
                                <Link className="btn btn-info btn-round bt-edit"
                                to="/edit-student">Edit</Link> 
                                </td>
                                <td name="remove">
                                <a className="btn btn-danger btn-round bt-remove"
                                href="#">Remove</a> 
                            </td>
                          </tr>
                        ))}
                      </tbody>
                  </table>
                </div>
              </div>
        </div>
      </div>
    </div>
    ); 
  }

} export default ListStudents

