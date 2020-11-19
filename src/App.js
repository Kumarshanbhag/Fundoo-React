import './App.scss';
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
           <Route path='/' component={SignIn} exact={true}></Route>
           <Route path='/forgotpassword' component={ForgotPassword}></Route>
           <Route path='/signup' component={SignUp}></Route>
           <Route path="/profile" component={Profile}/>
         </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
