import React, { Component } from "react";

import Post from "../../../component/Post/Post";

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
    isUpdate: false,
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
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

  putDataToAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
      console.log(res);
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log(this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
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
          <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />;
        })}
      </>
    );
  }
}
