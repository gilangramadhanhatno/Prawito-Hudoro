import React, { Component } from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

export default class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 5000);
  }

  render() {
    return (
      <>
        {/* <hr />
        <p>Youtube Component</p>
        <hr />
        <YoutubeComp time="7.12" title="Tutorial Belajar React JS - Bagian 1" desc=" 2x ditonton, 2 hari yang lalu" />
        <YoutubeComp time="8.32" title="Tutorial Belajar React JS - Bagian 2" desc="132x ditonton, 5 hari yang lalu" />
        <YoutubeComp time="12.54" title="Tutorial Belajar React JS - Bagian 3" desc="2kx ditonton, 6 hari yang lalu" />
        <YoutubeComp time="20.43" title="Tutorial Belajar React JS - Bagian 4" desc="56kx ditonton, 14 hari yang lalu" />
        <YoutubeComp /> */}

        {/* <Product /> */}

        {this.state.showComponent ? <LifeCycleComp /> : null}
      </>
    );
  }
}

// YoutubeComp.defaultProps = {
//   time: "00.00",
//   title: "Title Here",
//   desc: "x ditonton, x hari yang lalu",
// };