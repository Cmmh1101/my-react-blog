import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const Hero = () => (
  <>
    <Jumbotron className="jumbo-fluid hero m-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto hero-text">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="300"
            >
              <h1>Welcome to my world!</h1>

              <p>
                This is where I share my journey's ups and downs to support
                others to grow together in tech!
              </p>
              <Link to="/articles-list">
                <i className="fa fa-hand-o-right" />
                Explore Blog
              </Link>
              <p className="memo mt-5">
                Web Developer | Educator | Mom | Wife | Lifelong Learner
              </p>
            </FadeTransform>
          </div>
        </div>
      </div>

      <img
        className="hero-image"
        src="../images/computercoff.jpg"
        alt="giving a hand to help"
      />
    </Jumbotron>
  </>
);

export default Hero;
