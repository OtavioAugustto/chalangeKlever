import '../assets/css/App.css';
import ListStudents from '../components/list-students/ListStudents';
import TopBar from '../components/topbar/TopBar';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <TopBar></TopBar>
        </header>
        <div className="App-content">
          <ListStudents></ListStudents>
        </div>
        <div className="App-footer">
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
