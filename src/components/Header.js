import React from "react";
import { Jumbotron } from "reactstrap";

const Header = () => (
  <>
    <Jumbotron className="header m-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto hero-text">
            <h1>Blog Posts</h1>
          </div>
        </div>
      </div>

      <img
        className="hero-image"
        src="../images/coffeenature.jpg"
        alt="giving a hand to help"
      />
    </Jumbotron>
  </>
);

export default Header;
