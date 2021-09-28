import React, { useState, useEffect } from "react";
import articles from "../Pages/article-content";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  //   Add comment function
  const addComment = async () => {
    const result = await fetch(
      `http://localhost:8000/articles/${articleName}/add-comment`,
      {
        method: "post",
        body: JSON.stringify({ username, text: commentText }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <>
      <div id="add-comment-form" className="col-md-6 add_comment_form">
        <h3>Add a Comment</h3>
        <label>
          Name:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            rows="4"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
        </label>

        <button onClick={() => addComment()}>Add Comment</button>
      </div>
    </>
  );
};

export default AddCommentForm;