import React, { Component } from "react";

import Post from "../../component/Post/Post";

import axios from "axios";

import "./BlogPost.css";

export default class BlogPost extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    // Pemanggilan API menggunakan axios
    axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </>
    );
  }
}
