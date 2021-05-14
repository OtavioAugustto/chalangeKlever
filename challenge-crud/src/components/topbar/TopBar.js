import logo from '../../assets/img/logo-wing-chun.png';
import '../../assets/css/App.css';


function TopBar() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Title-TopBar">Wing Chun Kung Fu</h1>
    </div>
  );
}

export default TopBar;
