import React from "react";
import Hero from "../components/Hero";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const HomePage = () => (
  <>
    <Hero />
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <h2>Stories</h2>
        </div>
      </div>
    </div>
    <ArticlesList articles={articleContent} className="home_article_list" />
  </>
);

export default HomePage;
