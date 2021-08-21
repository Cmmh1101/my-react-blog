import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        {/* display a text sample only 150 */}
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
