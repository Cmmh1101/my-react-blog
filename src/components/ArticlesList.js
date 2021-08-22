import React from "react";
import { Link } from "react-router-dom";
import { Fade, Stagger, FadeTransform } from "react-animation-components";

const ArticlesList = ({ articles }) => (
  <Stagger in>
    {articles.map((article, key) => (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateX(-100%)",
        }}
        delay="2000"
      >
        <div className="article-list-links">
          <Link key={key} to={`/article/${article.name}`}>
            <div className="container">
              <div className="row">
                <div className="col-8 col-sm-12 col-lg-10 col-xl-8 mx-auto article-list-item-container">
                  <h3>{article.title}</h3>
                  <div className="article-list-item d-block d-sm-flex">
                    <div className="image-container">
                      <img
                        className="article-thumbnail"
                        src={article.image}
                        alt=""
                      />
                    </div>
                    <div className="article-description ml-sm-4">
                      <span className="memo">Published: {article.date}</span>
                      <p>
                        {article.content[0].substring(0, 150)}...
                        <i className="fa fa-hand-o-right ml-3" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </FadeTransform>
    ))}
  </Stagger>
);

export default ArticlesList;
