/** @format */

import React from "react";
import "../CSS/Post.css";
import avatar from "../Images/avatar.png";

import send from "../Images/send.png";
import { IconButton } from "@material-ui/core";
function Post({ post }) {
  return (
    <div className="Post">
      <div className="post_container">
        <div className="post_avatar">
          <img src={avatar} alt="avatar"></img>
        </div>
        <div className="post_content">
          <div className="post_tittle">
            <strong>Teacher</strong>
            <span>12:40</span>
          </div>
          <div className="post_text">{post}</div>
        </div>
      </div>
      <div className="comment_section">
        <div className="commentItems_continer">
          <img src={avatar} alt="avatar"></img>

          <input placeholder="Write a comment..." />
          <IconButton>
            <img src={send} alt="send"></img>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
