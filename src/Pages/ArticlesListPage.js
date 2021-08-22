import React from "react";
import ArticlesList from "../components/ArticlesList";
import Header from "../components/Header";
import articleContent from "./article-content";
import { Stagger } from "react-animation-components";

const ArticlesListPage = () => (
  <>
    <Header />

    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
