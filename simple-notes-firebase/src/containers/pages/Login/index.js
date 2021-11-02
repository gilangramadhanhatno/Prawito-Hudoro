import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUserName } from "../../../config/redux/action";

class Login extends Component {
  changeUser = () => {
    this.props.changeUserName();
  };

  render() {
    return (
      <div>
        <h2>Login Page {this.props.user}</h2>

        <button onClick={this.changeUser}>Change UserName</button>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popup: state.popup,
  user: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionUserName()),
});

export default connect(mapStateToProps, reduxDispatch)(Login);
