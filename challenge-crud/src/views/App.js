import '../assets/css/App.css';

import TopBar from '../components/topbar/TopBar';
import ListStudents from '../components/list-students/ListStudents';
import Footer from '../components/footer/Footer';
import NewStudent from './new-student/NewStudent';
import EditStudent from './edit-student/EditStudent';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
            <header className="App-header" >
              <TopBar ></TopBar>
            </header>
            <Route exact path="/">
              <div className="App-content">
                <ListStudents></ListStudents>
              </div>
            </Route>
            <Route exact path="/new-student">
              <div className="Student-content">
                <NewStudent></NewStudent>
              </div>
            </Route>
            <Route exact path="/edit-student/:id">
              <div className="Student-content">
                <EditStudent></EditStudent>
              </div>
            </Route>
            <div className="App-footer">
              <Footer></Footer>
            </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
