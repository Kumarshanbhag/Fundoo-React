import React, { Component } from 'react'
import CreateNote from '../Components/CreateNote';
import Header from '../Components/Header'
import Cards from '../Components/Cards';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
    this.state.userData = this.props.history.location.state;
  }

  render() {
    console.log('Profile',this.state.userData);
    console.log('Profile Name',this.state.userData.userData.name);

    return (
      <React.Fragment>
        <Header />
        <CreateNote />  
        <Cards />
      </React.Fragment>
    )       
  };
}

export default Dashboard;