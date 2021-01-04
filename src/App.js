import { Component } from 'react';
import User from './Components/Users/Users';
import NavBar from './Components/UI/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    userName: 'shreyas',   
  }
  

  render() {
    return (
      <div className="App container fluid">
        <NavBar/>
        <User/>
      </div>
    );
  }
}

export default App;
