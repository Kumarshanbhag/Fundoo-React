import React, { Component } from 'react'
import Header from '../Components/Header'

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
    return (
      <Header />
    )       
  };
}

export default Dashboard;