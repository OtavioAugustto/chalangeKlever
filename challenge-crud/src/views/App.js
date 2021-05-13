import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import Tavinho from '../tavinho/Tavinho';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primeiro Exemplo em React.
        </p>
        <Tavinho></Tavinho>
      </header>
    </div>
  );
}

export default App;
