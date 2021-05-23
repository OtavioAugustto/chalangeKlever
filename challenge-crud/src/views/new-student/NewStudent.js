import '../../assets/css/App.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import { FaUserCheck } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'



class NewStudent extends Component {

  state = {
  
    name:'',
    age:'',
    weight:'',
    height:''

  }

  insertData = event => {

        if(event.target.id === 'name') {
          this.setState({
            name: event.target.value,
          });
        }

        if(event.target.id === 'age'){
          this.setState({
            age: event.target.value,
          });
        }

        if(event.target.id === 'weight'){
          this.setState({
            weight: event.target.value,
          });
        }

        if(event.target.id === 'height'){
          this.setState({
            height: event.target.value,
          });
        }
    };

  sendStudent = event =>{
    event.preventDefault();
      const student = {
        
        name:this.state.name,
        age:this.state.age,
        weight:this.state.weight,
        height:this.state.height


      }
      axios.post('http://localhost:5000/students', student)
      .then (response => {
          console.log(response.data)
          
      })
  
  };

  redirectBack() {
    window.location.href = "/";
  }


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
                      <div className="row form-group" onChange={this.insertData}>

                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="name">Name: </label>
                          <input className="form-control" id="name" type="text" name="name" placeholder="Full Name"/>
                        </div>
                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="age">Age: </label>
                          <input className="form-control" id="age" name="age" placeholder="Ex: 18" type="text"/>
                        </div>

                      </div>
                      <div className="row form-group" onChange={this.insertData}>

                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="weight">Weight (KG): </label>
                          <input className="form-control" id="weight" name="weight" placeholder="Ex: 92" type="text"/>
                        </div>
                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="height">Height (M): </label>
                          <input className="form-control" id="height" name="height" placeholder="Ex: 1.72" type="text"/>
                        </div>

                      </div>
                          <Link className="btn btn-danger btn-round pull-left bt-back" to="/">Cancel < FaTimes /></Link>
                          <button type="submit" className="btn btn-success btn-round pull-right bt-add" onClick={this.redirectBack}>Save < FaUserCheck /></button>
                    </form>
              </div>
          </div>
      </div>
    </div>
  );
  }
}

export default NewStudent;