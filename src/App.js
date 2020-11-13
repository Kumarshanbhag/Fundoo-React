import './App.scss';
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
           <Route path='/' component={SignIn}></Route>
         </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
