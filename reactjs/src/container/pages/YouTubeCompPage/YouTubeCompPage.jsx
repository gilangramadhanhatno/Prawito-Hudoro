import React, { Component } from "react";

import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

export default class YouTubeCompPage extends Component {
  render() {
    return (
      <>
        <p>Youtube Component</p>
        <hr />
        <YoutubeComp time="7.12" title="Tutorial Belajar React JS - Bagian 1" desc=" 2x ditonton, 2 hari yang lalu" />
        <YoutubeComp time="8.32" title="Tutorial Belajar React JS - Bagian 2" desc="132x ditonton, 5 hari yang lalu" />
        <YoutubeComp time="12.54" title="Tutorial Belajar React JS - Bagian 3" desc="2kx ditonton, 6 hari yang lalu" />
        <YoutubeComp time="20.43" title="Tutorial Belajar React JS - Bagian 4" desc="56kx ditonton, 14 hari yang lalu" />
        <YoutubeComp />
      </>
    );
  }
}

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "x ditonton, x hari yang lalu",
};
