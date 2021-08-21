import React from "react";
import ArticlesList from "../components/ArticlesList";
import Header from "../components/Header";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <>
    <Header />

    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
