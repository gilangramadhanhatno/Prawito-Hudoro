import React, { Component } from "react";

import "./LifeCycleComp.css";

// State Management menggunakan Redux
// import { connect } from "react-redux";

// State Management menggunakan Context API
import { RootContext } from "../../Home/Home";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDrivedStateFromProps(props, state) {
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("should component update");
    console.log("next props: ", nextProps);
    console.log("next state: ", nextState);
    console.log("this state: ", this.state);
    console.groupEnd();
    if (this.state.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
  }

  componentWillUnmount() {}

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <>
              <h2>LifeCycle Component</h2>
              <button className="btn" onClick={this.changeCount}>
                Component Button {this.state.count}
              </button>

              <hr />
              <p>Total Order: {value.state.totalOrder}</p>
            </>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// State Management menggunakan Redux
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(LifeCycleComp);

// State Management menggunakan Context API
export default LifeCycleComp;
