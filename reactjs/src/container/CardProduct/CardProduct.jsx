import React, { Component } from "react";

export default class CardProduct extends Component {
  state = {
    order: 1,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://tse3.mm.bing.net/th?id=OIP.FQbWVqeH9FCWiKSmIJEjggHaEK&pid=Api&P=0&w=281&h=159" alt="" />
        </div>
        <p className="product-title">Daging Ayam Berbumbu</p>
        <p className="product-price">Rp.410.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}
