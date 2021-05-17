import '../../assets/css/App.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';




class NewStudent extends Component {

  state = {
    id:'',
    name:'',
    age:'',
    weight:'',
    height:''

  }

  insertData = event => {
    this.setState({

      id: event.target.value,
      name: event.target.value,
      age: event.target.value,
      weight: event.target.value,
      height: event.target.value

    });
 
  };

  sendStudent = event =>{
    event.preventDefault();

    const student = {
      id:this.id,
      name:this.name,
      age:this.age,
      weight:this.weight,
      height:this.height
    }

    axios.post('http://localhost:5000/students', {student})
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
                <h2 className="title-table">Insret New Student</h2>
              </div>
              <div className="card-body">
                    <form onSubmit={this.sendStudent}>
                      <div className="row form-group">

                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="name">Name: </label>
                          <input className="form-control" id="name" type="text" name="studentName" placeholder="Full Name" onChange={this.insertData} />
                        </div>
                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="age">Age: </label>
                          <input className="form-control" id="age" onChange={this.insertData} name="age" placeholder="Ex: 18" type="text"/>
                        </div>

                      </div>
                      <div className="row form-group">

                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="weight">Weight (KG): </label>
                          <input className="form-control" id="weight" onChange={this.insertData} name="weight" placeholder="Ex: 92" type="text"/>
                        </div>
                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="height">Height (M): </label>
                          <input className="form-control" id="height" onChange={this.insertData} name="height" placeholder="Ex: 1.72" type="text"/>
                        </div>

                      </div>
                          <Link className="btn btn-secondary btn-round pull-left bt-back" to="/">Return</Link>
                          <button type="submit" className="btn btn-success btn-round pull-right bt-add" href="#">Save</button>
                    </form>
              </div>
          </div>
      </div>
    </div>
  );
  }
}

export default NewStudent;