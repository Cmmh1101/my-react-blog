import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const AboutPage = () => (
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
              <h1>About Me</h1>
              <p>
                I'm a passionate self-taught Web Developer and Designer. My
                proactive approach has resulted in numerous important wins in my
                professional development in tech, teaching, and sports.
              </p>
              <p>
                Being able to plan, implement, supervise, evaluate, communicate,
                receive feedback, and correct are skills that combined with my
                Tech knowledge and Hispanic background give me a great base to
                help you grow and reach your goals.
              </p>
              <p>
                Since my Web Development journey started I found out that with
                tech I can do the things that I enjoy the most, be creative,
                solve problems, and to help others along the way.
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
        src="../images/computer-nature.jpg"
        alt="giving a hand to help"
      />
    </Jumbotron>
  </>
);

export default AboutPage;
