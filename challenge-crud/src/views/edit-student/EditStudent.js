import '../../assets/css/App.css';
import { Link, useParams } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import ListStudents from '../../components/list-students/ListStudents';
import { FaUserCheck } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'




class EditStudent extends Component {
  
  state = {
    id: '',
    name:'',
    age:'',
    weight:'',
    height:''

  }

  getStudentbyId(id) {
    ListStudents.getStudent(id)
      .then(response => {
        this.setState({
           id: response.data
        });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  }

  getData = event => {

    if(event.target.id === 'name') {
      this.setState({
        name: this.state.name,
      });
    }

    if(event.target.id === 'age'){
      this.setState({
        age: this.state.value,
      });
    }

    if(event.target.id === 'weight'){
      this.setState({
        weight: this.state.value,
      });
    }

    if(event.target.id === 'height'){
      this.setState({
        height: this.state.value,
      });
    }
};

  updateStudent = event =>{
    event.preventDefault();

    const student = {
      name:this.state.name,
      age:this.state.age,
      weight:this.state.weight,
      height:this.state.height


    }
    axios.put('http://localhost:5000/students', student)
    .then (response => {
        console.log(response.data)
        
    })
   
  };



  render(){

    return (
      <div className="container-fluid">
        <div className="col-md-12">
              <div className="card">
                  <div className="card-header"> 
                  <h2 className="title-table">Edit Student</h2>
              </div>
                  <div className="card-body">
                      <form onSubmit={this.updateStudent}>
                      <div className="row form-group" onChange={this.getData}>

                          <div className="col-md-6">
                            <label className="pull-left label-txt" htmlFor="name">Name: </label>
                            <input className="form-control" id="name" type="text" name="studentName"/>
                          </div>
                          <div className="col-md-6">
                            <label className="pull-left label-txt" htmlFor="age">Age: </label>
                            <input className="form-control" id="age" name="age" type="text"/>
                          </div>

                          </div>
                          <div className="row form-group" onChange={this.getData}>

                          <div className="col-md-6">
                            <label className="pull-left label-txt" htmlFor="weight">Weight (KG): </label>
                            <input className="form-control" id="weight" name="weight" type="text"/>
                          </div>
                          <div className="col-md-6">
                            <label className="pull-left label-txt" htmlFor="height">Height (M): </label>
                            <input className="form-control" id="height" name="height" type="text"/>
                          </div>

                          </div>
                            <Link className="btn btn-danger btn-round pull-left bt-back" to="/">Cancel < FaTimes /></Link>
                            <button className="btn btn-success btn-round pull-right bt-add" href="#">Save < FaUserCheck /></button>
                      </form>
                  </div>
              </div>
        </div>
      </div>
    );
  }
} export default EditStudent;
