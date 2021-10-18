import React, { Component } from "react";

// State Management menggunakan Redux
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";

// State Management menggunakan Context API
import { RootContext } from "../../../Home/Home";

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
      <RootContext.Consumer>
        {(value) => {
          console.log("value: ", value);
          return (
            <div className="counter">
              <button className="minus" onClick={() => value.dispatch({ type: "MINUS_ORDER" })}>
                -
              </button>
              <input type="text" value={value.state.totalOrder} />
              <button className="plus" onClick={() => value.dispatch({ type: "PLUS_ORDER" })}>
                +
              </button>
            </div>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// State Management menggunakan Context API
export default Counter;
