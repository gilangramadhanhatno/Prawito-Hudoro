import React, { Component } from "react";

// State Management menggunakan Redux
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";

// State Management menggunakan Context API
// import { RootContext } from "../../../Home/Home";

// State Management menggunakan Context API setelah direfactoring
import { GlobalConsumer } from "../../../../context/context";

class Counter extends Component {
  //   state = {
  //     order: 1,
  //   };

  //   handleCounterChange = (newValue) => {
  //     this.props.onCounterChange(newValue);
  //   };

  //   handlePlus = () => {
  //     this.setState(
  //       {
  //         order: this.state.order + 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   };

  //   handleMinus = () => {
  //     if (this.state.order > 0) {
  //       this.setState(
  //         {
  //           order: this.state.order - 1,
  //         },
  //         () => {
  //           this.handleCounterChange(this.state.order);
  //         }
  //       );
  //     }
  //   };

  render() {
    return (
      <div className="counter">
        <button className="minus" onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button className="plus" onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>
          +
        </button>
      </div>
    );
  }
}

// State Management menggunakan Redux
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// State Management menggunakan Context API
export default GlobalConsumer(Counter);
