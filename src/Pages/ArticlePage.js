import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import ShareButtons from "../components/ShareButtons";
import AddCommentForm from "../components/AddCommentForm";
import NotFoundPage from "../Pages/404page";
import { Jumbotron } from "reactstrap";

const ArticlePage = ({ match }) => {
  //  Fetching data
  const name = match.params.name;
  // Find the article name
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8000/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };

    fetchData();
  }, [name]);

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
          <div className="col-lg-10 col-xl-8 mx-auto">
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
            <div className="col-12 d-flex justify-content-center">
              <UpvotesSection
                articleName={name}
                upvotes={articleInfo.upvotes}
                setArticleInfo={setArticleInfo}
              />
              <ShareButtons />
            </div>
            <div className="col-lg-10 col-xl-8 mx-auto">
              <CommentsList comments={articleInfo.comments} />
              <AddCommentForm
                articleName={name}
                setArticleInfo={setArticleInfo}
              />
            </div>

            <h3 className="subtitle">Related Articles:</h3>
            <div className="col-lg-10 mx-auto">
              <ArticlesList articles={relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
