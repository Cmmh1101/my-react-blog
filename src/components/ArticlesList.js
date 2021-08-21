import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <div className="article-list-links">
        <Link key={key} to={`/article/${article.name}`}>
          <div className="container">
            <div className="row">
              <div className="col article-list-item-container">
                <h3>{article.title}</h3>
                <div className="article-list-item">
                  <div className="image-container">
                    <img
                      className="article-thumbnail"
                      src={article.image}
                      alt=""
                    />
                  </div>
                  <div className="article-description">
                    <span className="memo">Published: {article.date}</span>
                    <p>{article.content[0].substring(0, 150)}...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>
);

export default ArticlesList;
