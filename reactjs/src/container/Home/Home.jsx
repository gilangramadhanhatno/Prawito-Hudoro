import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import YouTubeCompPage from "../pages/YouTubeCompPage/YouTubeCompPage";

import "./Home.css";

// State Management menggunakan Context API
export const RootContext = createContext();
const Provider = RootContext.Provider;

export default class Home extends Component {
  // State Management menggunakan Context API
  state = {
    totalOrder: 0,
  };

  dispatch = (action) => {
    if (action.type === "PLUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder + 1,
      });
    }
    if (action.type === "MINUS_ORDER") {
      if (this.state.totalOrder > 0) {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
    }
  };

  // state = {
  //   showComponent: true,
  // };

  // componentDidMount() {
  //   // setTimeout(() => {
  //   //   this.setState({
  //   //     showComponent: false,
  //   //   });
  //   // }, 5000);
  // }

  render() {
    return (
      <Router>
        {/* {this.state.showComponent ? <LifeCycleComp /> : null} */}
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <>
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
          </>
        </Provider>
      </Router>
    );
  }
}
