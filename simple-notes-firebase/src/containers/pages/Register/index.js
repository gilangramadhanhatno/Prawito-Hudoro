import React, { Component } from "react";

import firebase from "../../../config/firebase";

import "./Register.scss";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegiterSubmit = () => {
    const { email, password } = this.state;
    console.log("data before send: ", email, password);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <p className="title">Register Page</p>
          <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} />
          <input className="input" id="password" type="password" placeholder="Password" onChange={this.handleChangeText} />
          <button className="btn" onClick={this.handleRegiterSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
