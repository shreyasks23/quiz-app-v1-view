import { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../_components/PrivateRoute';
import { HomePage } from '../Homepage/Homepage';
import { LoginPage } from '../LoginPage/LoginPage';

class App extends Component { 

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-md-offset-2">
            <Router>
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
