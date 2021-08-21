import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "../Pages/404page";

const ArticlePage = ({ match }) => {
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
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Related Articles:</h3>
      <ArticlesList articles={relatedArticles} />
    </>
  );
};

export default ArticlePage;