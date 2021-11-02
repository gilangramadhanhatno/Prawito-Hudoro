import React, { Component } from "react";

import { connect } from "react-redux";

import Button from "../../../components/atoms/Button";

import { registerUserAPI } from "../../../config/redux/action";

import "./Register.scss";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegiterSubmit = async () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const res = await this.props.registerAPI({ email, password }).catch((err) => err);
    if (res) {
      this.setState({
        email: "",
        password: "",
      });
      history.push("/login");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <p className="title">Register Page</p>
          <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} value={this.state.email} />
          <input className="input" id="password" type="password" placeholder="Password" onChange={this.handleChangeText} value={this.state.password} />
          <Button onClick={this.handleRegiterSubmit} title="Register" loading={this.props.isLoading} />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
