import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import ShareButtons from "../components/ShareButtons";
import NotFoundPage from "../Pages/404page";
import { Jumbotron } from "reactstrap";

const ArticlePage = ({ match }) => {
  //  Fetching data

  const name = match.params.name;
  // Find the article name
  const article = articleContent.find((article) => article.name === name);

  // display error message if name doesn't exist
  if (!article) return <NotFoundPage />;

  const relatedArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <Jumbotron className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 mx-auto hero-text">
              <h1>{article.title}</h1>
            </div>
          </div>
        </div>

        <img className="hero-image" src={article.image} alt="" />
      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 my-3 mx-auto">
            <h4>
              <em>{article.description}</em>
            </h4>
            <span>{article.date}</span>
          </div>
          <div className="col-lg-10 mx-auto">
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
            <ShareButtons />

            <h3 className="subtitle">Related Articles:</h3>
            <div className="col-lg-10 col-xl-12 mx-auto">
              <ArticlesList articles={relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
