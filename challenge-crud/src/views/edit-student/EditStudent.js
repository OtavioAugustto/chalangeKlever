import '../../assets/css/App.css';
import { Link } from 'react-router-dom';

function NewStudent() {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
            <div className="card">
                <div className="card-header"> 
                <h2 className="title-table">Edit Student</h2>
            </div>
                <div className="card-body">
                    <form>
                    <div className="row form-group">

                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="name">Name: </label>
                          <input className="form-control" id="name" type="text" name="studentName" placeholder="Full Name" />
                        </div>
                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="age">Age: </label>
                          <input className="form-control" id="age" name="age" placeholder="Ex: 18" type="text"/>
                        </div>

                        </div>
                        <div className="row form-group">

                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="weight">Weight (KG): </label>
                          <input className="form-control" id="weight" name="weight" placeholder="Ex: 92" type="text"/>
                        </div>
                        <div className="col-md-6">
                          <label className="pull-left label-txt" htmlFor="height">Height (M): </label>
                          <input className="form-control" id="height" name="height" placeholder="Ex: 1.72" type="text"/>
                        </div>

                        </div>
                          <Link className="btn btn-secondary btn-round pull-left bt-back" to="/">Return</Link>
                          <a className="btn btn-success btn-round pull-right bt-add" href="#">Save</a>
                    </form>
                </div>
            </div>
       </div>
    </div>
  );
}

export default NewStudent;