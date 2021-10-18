import React, { Component } from "react";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";

// State Management menggunakan Redux
// import { connect } from "react-redux";

// State Management menggunakan Context API
import { RootContext } from "../../Home/Home";

class Product extends Component {
  // state = {
  //   order: 1,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <>
              <div className="header">
                <div className="logo">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.ky_DKQqXwpa1zJ1E6q6XlgHaCv&pid=Api&P=0&w=418&h=155" alt="" />
                </div>
                <div className="troley">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.7pjvALQDTUkfhY_hwjx0MQHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                  <div className="count">{value.state.totalOrder}</div>
                </div>
              </div>
              <CardProduct />
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

// export default connect(mapStateToProps)(Product);

// State Management menggunakan Context API
export default Product;
