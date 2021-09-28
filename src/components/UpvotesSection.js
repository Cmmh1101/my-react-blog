import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(
      `http://localhost:8000/articles/${articleName}/upvote`,
      {
        method: "post",
      }
    );
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <>
      <div className="upvotes-section share-buttons">
        <button onClick={() => upvoteArticle()}>
          <p>
            {upvotes} <i class="fa fa-thumbs-up" />{" "}
          </p>
        </button>
      </div>
    </>
  );
};

export default UpvotesSection;
