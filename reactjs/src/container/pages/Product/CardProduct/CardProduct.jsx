import React, { Component } from "react";
import Counter from "./Counter";

export default class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://tse3.mm.bing.net/th?id=OIP.FQbWVqeH9FCWiKSmIJEjggHaEK&pid=Api&P=0&w=281&h=159" alt="" />
        </div>
        <p className="product-title">Daging Ayam Berbumbu</p>
        <p className="product-price">Rp.410.000</p>
        <Counter />
      </div>
    );
  }
}
