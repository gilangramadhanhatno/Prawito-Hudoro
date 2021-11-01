import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login Page {this.props.popup}</h2>
        <button>Go to Regiter</button>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popup: state.popup,
});

export default connect(mapStateToProps)(Login);
