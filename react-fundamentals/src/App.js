import logo from './logo.svg';
import './App.css';
import MyCustomComp from './components/MyCustomComp';
import Product from './components/Product';

function App() {

  /**
   * Default code from CRA
   */

  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    <div className="App">
      <MyCustomComp/>
    </div>

    <div className="App">
      <Product/>
    </div>
    </>
    
  );

}

export default App;
