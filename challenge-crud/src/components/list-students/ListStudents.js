import '../../assets/css/ListStudents.css';


function ListStudents() {
  return (
    <div class="container-fluid">
      <div class="col-md-12">
        <div class="card">
            <div class="card-header"> 
            <h2 class="title-table">List Of Students</h2>
            <button id="bt-add" type="button" class="btn btn-success pull-right">New Student</button>
        </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                      <thead class="text-dark">
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
                        <tr class="paciente">
                          <td name="id">1</td>
                          <td name="name">Paulo</td>
                          <td name="age">18</td>
                          <td name="weight">100</td>
                          <td name="height">2.00</td>
                          <td name="edit">
                            <a href="#">Edit</a> 
                          </td>
                          <td name="remove">
                            <a href="#">Remove</a> 
                          </td>
                        </tr>

                        <tr class="paciente">
                          <td name="id">2</td>
                          <td name="name">João</td>
                          <td name="age">18</td>
                          <td name="weight">80</td>
                          <td name="height">1.72</td>
                          <td name="edit">
                            <a href="#">Edit</a> 
                          </td>
                          <td name="remove">
                            <a href="#">Remove</a> 
                          </td>
                        </tr>

                        <tr class="paciente">
                          <td name="id">3</td>
                          <td name="name">Erica</td>
                          <td name="age">18</td>
                          <td class="weight">54</td>
                          <td class="height">1.64</td>
                          <td name="edit">
                            <a href="#">Edit</a> 
                          </td>
                          <td name="remove">
                            <a href="#">Remove</a> 
                          </td>
                        </tr>

                        <tr class="paciente">
                          <td name="id">4</td>
                          <td name="name">Douglas</td>
                          <td name="age">18</td>
                          <td class="weight">85</td>
                          <td class="height">1.73</td>
                          <td name="edit">
                            <a href="#">Edit</a> 
                          </td>
                          <td name="remove">
                            <a href="#">Remove</a> 
                          </td>
                        </tr>
                        <tr class="paciente">
                          <td name="id">5</td>
                          <td name="name">Armando</td>
                          <td name="age">18</td>
                          <td class="weight">85</td>
                          <td class="height">1.73</td>
                          <td name="edit">
                            <a href="#">Edit</a> 
                          </td>
                          <td name="remove">
                            <a href="#">Remove</a> 
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
