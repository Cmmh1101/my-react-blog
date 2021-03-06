import React, { useEffect, useState } from "react";
import { Jumbotron } from "reactstrap";

const NewArticlePage = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState([]);
  const [image, setImage] = useState("");

  const addPost = async () => {
    const result = await fetch("http://localhost/articles/new", {});
  };

  return (
    <>
      <Jumbotron className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 mx-auto hero-text">
              <h1>Create New Post</h1>
            </div>
          </div>
        </div>

        <img className="hero-image" src="../images/keyboard.jpg" alt="" />
      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <form action="/posts/store" method="POST">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    name="username"
                    placeholder="Username"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    name="title"
                    placeholder="Title"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    name="description"
                    placeholder="Description"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Content</label>
                  <textarea
                    name="content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Content ..."
                    cols="30"
                    rows="10"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="file"
                  name="image"
                  onChange={(event) => setImage(event.target.value)}
                  value={image}
                  class="form-control-file"
                />
              </div>
              <div class="form-group my-4 text-center">
                <button class="btn btn-primary">Create Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArticlePage;
