import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../../components/atoms/Button";

import { loginUserAPI } from "../../../config/redux/action";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const { history } = this.props;

    const res = await this.props.loginAPI({ email, password }).catch((err) => err);
    if (res) {
      console.log("login success");
      this.setState({
        email: "",
        password: "",
      });
      history.push("/");
    } else {
      console.log("login failed");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <p className="title">Login Page</p>
          <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} value={this.state.email} />
          <input className="input" id="password" type="password" placeholder="Password" onChange={this.handleChangeText} value={this.state.password} />
          <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
