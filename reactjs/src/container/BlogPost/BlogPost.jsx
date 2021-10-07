import React, { Component } from "react";

import Post from "../../component/Post/Post";

import axios from "axios";

import "./BlogPost.css";

export default class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  componentDidMount() {
    // Pemanggilan API(GET) menggunakan axios
    // axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
    //   this.setState({
    //     post: res.data,
    //   });
    // });

    // Pemanggilan API(GET) menggunakan fetch
    // fetch("http://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    // Pemanggilan API(GET, Fake API, Real time) menggunakan axios
    // axios.get("http://localhost:3004/posts").then((res) => {
    //   this.setState({
    //     post: res.data,
    //   });
    // });

    // Pemanggilan API(GET) ketika sudah ada method get
    this.getPostAPI();
  }

  render() {
    return (
      <>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </>
    );
  }
}
