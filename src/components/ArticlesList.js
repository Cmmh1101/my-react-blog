import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <img className="article-thumbnail" src={article.image} alt="" />
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
