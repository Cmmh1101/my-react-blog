import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { useLocation } from "react-router-dom";

const ShareButtons = (props) => {
  let location = useLocation();
  let currentUrl = "https://www.blog.carlamontano.tech" + location.pathname;
  return (
    <>
      <div className="share_buttons">
        <FacebookShareButton
          url={currentUrl}
          quote={
            "Web Dev Journey - Developer | Educator | Mom | Wife | Lifelong Learner"
          }
          hashtag="#webdevelopment"
          className="shareButton"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={currentUrl}
          quote={
            "Web Dev Journey - Developer | Educator | Mom | Wife | Lifelong Learner"
          }
          hashtag="#webdevelopment"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
