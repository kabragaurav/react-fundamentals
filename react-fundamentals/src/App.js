import logo from './logo.svg';
import './App.css';
import MyCustomComp from './components/MyCustomComp';
import ProductList from './containers/ProductList';
import MyCustomClassComp from './components/MyCustomClassComp';
import MyCustomPureComp from './components/MyCustomPureComp';
import MyCustomCompToBePure from './components/MyCustomCompToBePure';
import Checkout from './components/Checkout';

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
      <hr/>

      <Checkout/><hr/>

      <MyCustomCompToBePure/><hr/>

      <MyCustomPureComp/><hr/>

      <MyCustomComp/><hr/>
      
      <ProductList/><hr/>
      
      <MyCustomClassComp/><hr/>
    </div>
    </>
    
  );

}

export default App;
