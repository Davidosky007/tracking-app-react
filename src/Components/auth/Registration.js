import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router';

const Registration = () => {
  const [redirect, setRedirect] = useState();
  const [error, setError] = useState();

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const signUp = path !== "logged_in";
  const submitValue = signUp ? 'Sign Up' : 'Login';
  const endpoint = signUp ? 'users' : 'Login';
  const validatePassword = signUp ? <input className="field m-b-20 background-blue color-white" id="rPassword" type="password" placeholder="reapeat password" /> : <div />;
  const link = signUp ? <a href="/users/login">Login</a> : <a href="/users/sign-up">Sign Up</a>;

  handleSubmit(e) {
    const {
      email,
      password,
      password_confirmation
    } = this.state;

    axios.post("http://localhost:3001/registrations", {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    },
    { withCredentials: true }
    ).then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
          <input type="password" name="password_confirmation" placeholder="Password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;



