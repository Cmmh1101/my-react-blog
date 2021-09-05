import React from "react";
import { Jumbotron } from "reactstrap";

const RegisterPage = () => {
  return (
    <>
      <Jumbotron className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 mx-auto hero-text">
              <h1>Register</h1>
            </div>
          </div>
        </div>

        <img className="hero-image" src="../images/keyboard.jpg" alt="" />
      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <form
              action="/users/register"
              method="POST"
              encType="multipart/form-data"
            >
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="form-group my-4 text-center">
                <button class="btn btn-primary">Register now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
