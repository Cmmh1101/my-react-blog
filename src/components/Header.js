import React from "react";
import { Jumbotron } from "reactstrap";
import { FadeTransform } from "react-animation-components";

const Header = () => (
  <>
    <Jumbotron className="header m-0">
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
              <h1>Latest Stories</h1>
            </FadeTransform>
          </div>
        </div>
      </div>

      <img
        className="hero-image"
        src="../images/journal.jpg"
        alt="giving a hand to help"
      />
    </Jumbotron>
  </>
);

export default Header;
