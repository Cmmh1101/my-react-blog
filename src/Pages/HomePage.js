import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <Hero />
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto hero-text">
          <h1>Welcome to my blog</h1>
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
  </>
);

export default HomePage;
