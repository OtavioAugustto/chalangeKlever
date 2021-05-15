import '../../assets/css/App.css';


function ListStudents() {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="card">
            <div className="card-header"> 
            <h2 className="title-table">List Of Students</h2>
            <a class="btn btn-success btn-round pull-right bt-add" href="/new-student">New Student</a>
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
                      <tbody id="">
                        <tr>
                          <td name="id">1</td>
                          <td name="name">Paulo</td>
                          <td name="age">18</td>
                          <td name="weight">100</td>
                          <td name="height">2.00</td>
                          <td name="edit">
                          <a class="btn btn-info btn-round bt-edit"
                          href="/edit-student">Edit</a> 
                          </td>
                          <td name="remove">
                          <a class="btn btn-danger btn-round bt-remove"
                          href="#">Remove</a> 
                          </td>
                        </tr>

                        <tr>
                          <td name="id">2</td>
                          <td name="name">João</td>
                          <td name="age">18</td>
                          <td name="weight">80</td>
                          <td name="height">1.72</td>
                          <td name="edit">
                          <a class="btn btn-info btn-round bt-edit"
                          href="/edit-student">Edit</a> 
                          </td>
                          <td name="remove">
                          <a class="btn btn-danger btn-round bt-remove"
                          href="#">Remove</a> 
                          </td>
                        </tr>

                        <tr>
                          <td name="id">3</td>
                          <td name="name">Erica</td>
                          <td name="age">18</td>
                          <td name="weight">54</td>
                          <td name="height">1.64</td>
                          <td name="edit">
                          <a class="btn btn-info btn-round bt-edit"
                          href="/edit-student">Edit</a>
                          </td>
                          <td name="remove">
                          <a class="btn btn-danger btn-round bt-remove"
                          href="#">Remove</a> 
                          </td>
                        </tr>

                        <tr>
                          <td name="id">4</td>
                          <td name="name">Douglas</td>
                          <td name="age">18</td>
                          <td name="weight">85</td>
                          <td name="height">1.73</td>
                          <td name="edit">
                          <a class="btn btn-info btn-round bt-edit"
                          href="/edit-student">Edit</a>
                          </td>
                          <td name="remove">
                          <a class="btn btn-danger btn-round bt-remove"
                          href="#">Remove</a> 
                          </td>
                        </tr>
                        <tr>
                          <td name="id">5</td>
                          <td name="name">Armando</td>
                          <td name="age">18</td>
                          <td name="weight">85</td>
                          <td name="height">1.73</td>
                          <td name="edit">
                          <a class="btn btn-info btn-round bt-edit"
                          href="/edit-student">Edit</a>
                          </td>
                          <td name="remove">
                          <a class="btn btn-danger btn-round bt-remove"
                          href="#">Remove</a> 
                          </td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
        </div>
      </div>
    </div>
      
  );
}

export default ListStudents;
