import logo from './logo.svg';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List itemList={["Get Milk", "Buy Amazon", "Take over the world"]} />
        <List itemList={["Get Bread", "Get Eggs"]} />
      </header>
    </div>
  );
}

export default App;
