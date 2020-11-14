import './App.scss';
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import ForgotPassword from './Components/ForgotPassword';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
           <Route path='/' component={SignIn} exact={true}></Route>
           <Route path='/forgotpassword' component={ForgotPassword}></Route>
         </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
