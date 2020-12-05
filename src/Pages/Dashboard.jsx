import React, { Component } from 'react'
import CreateNote from '../Components/CreateNote';
import Header from '../Components/Header'
import DisplayNotes from '../Components/DisplayNotes'
// import NoteServiceAPI from '../Services/NoteServices.jsx'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
    this.state.userData = this.props.history.location.state;
  }

  render() {
    // console.log('Profile', this.state.userData);
    // console.log('Profile Name', this.state.userData.userData.name);
    return (
      <React.Fragment>
        <Header />
        <CreateNote />
        <DisplayNotes />
        {/* <Cards /> */}
        {/* <Router>
          <Route path="/dashboard/trash" component={DisplayTrash} />
        </Router> */}
      </React.Fragment>
    )
  };
}

export default Dashboard;