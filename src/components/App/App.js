import logo from '../../assets/logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header_first'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-title'>O'Boardgame</h1>
        </div>
        <div className='App-header_separate'>
        <hr/>
        </div>
      </header>
    </div>
  );
}

export default App;
