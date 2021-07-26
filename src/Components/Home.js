import axios from 'axios';
import React, { Component } from 'react';
import Login from './auth/Login';
import Registration from './auth/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard")
  }

  handleLogoutClick() {
    axios.delete("http://localhost:3001/logout", { withCredentials: true })
    .then(res => {
      this.props.handleLogout();
    })
    .catch(err => {
      console.log("logout error", err)
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Registration />
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    )
  }
}
