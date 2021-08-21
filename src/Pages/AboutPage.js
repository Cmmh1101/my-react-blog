import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <>
    <Jumbotron className="jumbo-fluid hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto hero-text">
            <h1>About Me</h1>
            <p>
              this is my blog welcomethis is my blog welcomethis is my blog
              welcomethis is my blog welcome this is my blog welcome this is my
              blog welcome this is my blog welcome this is my blog welcome this
            </p>
            <p>
              this is my blog welcomethis is my blog welcomethis is my blog
              welcomethis is my blog welcome this is my blog welcome this is my
              blog welcome this is my blog welcome this is my blog welcome this
            </p>
            <p>
              this is my blog welcomethis is my blog welcomethis is my blog
              welcomethis is my blog welcome this is my blog welcome this is my
              blog welcome this is my blog welcome this is my blog welcome this
            </p>
            <Link to="/articles-list">
              <i className="fa fa-hand-o-right" />
              Explore Blog
            </Link>
          </div>
        </div>
      </div>

      <img
        className="hero-image"
        src="../images/helpingothers.jpg"
        alt="giving a hand to help"
      />
    </Jumbotron>
  </>
);

export default AboutPage;
