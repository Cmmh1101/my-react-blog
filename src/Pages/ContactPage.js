import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const Contact = () => (
  <>
    <Jumbotron className="jumbo-fluid hero m-0 pt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10 mx-auto hero-text">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="1000"
            >
              <h1>Let's Connect!</h1>
              <div className="contact-image mx-auto">
                <img src="../images/profile-img.png" alt="Carla Montano" />
              </div>
              <div className="col text-center">
                <div className="col-12 contact-icons">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/carla-montano",
                    }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </Link>
                  <Link
                    to={{ pathname: "https://github.com/cmmh1101" }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </Link>
                  <Link
                    to={{ pathname: "https://twitter.com/cmmh11" }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <p className="memo mt-md-5">
                Web Developer | Educator | Mom | Wife | Lifelong Learner
              </p>
            </FadeTransform>
          </div>
        </div>
      </div>

      <img
        className="hero-image"
        src="../images/contact.jpg"
        alt="giving a hand to help"
      />
    </Jumbotron>
  </>
);

export default Contact;
