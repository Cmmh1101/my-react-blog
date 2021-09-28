import React from "react";
import { Card } from "reactstrap";

const CommentsList = ({ comments }) => (
  <>
    <h3 className="subtitle">Comments:</h3>
    {comments.map((comment, key) => (
      <div
        className="comments_area col-lg-10 mx-auto article-list-item-container"
        key={key}
      >
        <div className="comment col-10">
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      </div>
    ))}
  </>
);

export default CommentsList;
