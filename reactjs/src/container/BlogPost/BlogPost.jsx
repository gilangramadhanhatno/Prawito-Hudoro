import React, { Component } from "react";

import Post from "../../component/Post/Post";

import axios from "axios";

import "./BlogPost.css";

export default class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    formBlogPostNew["id"] = timestamp;
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log("value obj formBlogPost: ", this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    this.postDataToAPI();
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
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </>
    );
  }
}
