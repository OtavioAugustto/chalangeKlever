import '../../assets/css/App.css';


function NewStudent() {
  return (
    <div class="container-fluid">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header"> 
                <h2 class="title-table">Insret New Student</h2>
              </div>
              <div class="card-body">
                    <form>
                      <div class="row form-group">

                        <div class="col-md-6">
                          <label class="pull-left label-txt" for="name">Name: </label>
                          <input class="form-control" id="name" type="text" name="studentName" placeholder="Full Name" />
                        </div>
                        <div class="col-md-6">
                          <label class="pull-left label-txt" for="age">Age: </label>
                          <input class="form-control" id="age" name="age" placeholder="Ex: 18" type="text"/>
                        </div>

                      </div>
                      <div class="row form-group">

                        <div class="col-md-6">
                          <label class="pull-left label-txt" for="weight">Weight (KG): </label>
                          <input class="form-control" id="weight" name="weight" placeholder="Ex: 92" type="text"/>
                        </div>
                        <div class="col-md-6">
                          <label class="pull-left label-txt" for="height">Height (M): </label>
                          <input class="form-control" id="height" name="height" placeholder="Ex: 1.72" type="text"/>
                        </div>

                      </div>
                          <a class="btn btn-secondary btn-round pull-left bt-back" href="/">Return</a>
                          <a class="btn btn-success btn-round pull-right bt-add" href="#">Save</a>
                    </form>
              </div>
          </div>
      </div>
    </div>
  );
}

export default NewStudent;