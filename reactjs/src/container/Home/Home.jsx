import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import YouTubeCompPage from "../pages/YouTubeCompPage/YouTubeCompPage";

import "./Home.css";

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
        {/* {this.state.showComponent ? <LifeCycleComp /> : null} */}

        <Router>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube-component">YouTube</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube-component" component={YouTubeCompPage} />
        </Router>
      </>
    );
  }
}
