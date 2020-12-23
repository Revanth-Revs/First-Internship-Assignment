/** @format */

import React, { useState } from "react";
import "../CSS/PostPage.css";
import { Button, ListItemIcon, IconButton } from "@material-ui/core";
import attachment from "../Images/attachment.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Post from "./Post";
import Navbars from "./NavBar";

function PostPage() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const handlePost = () => {
    setPost([...post, input]);
    console.log(post);
    setInput("");
  };
  const handleCancle = () => {
    setInput("");
  };
  return (
    <div className="screen2">
      <div>
        <Navbars />
      </div>
      <div className="screen2_content_container">
        <div className="inputOuterbox">
          <div className="inputInnerbox">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Share something with your class.."
            />
          </div>
          <div className="inputOuterbox_buttons_container">
            <div className="left_button_container">
              <Button onClick={handleCancle}>Cancel</Button>
            </div>
            <div className="right_button_container">
              <IconButton>
                <img src={attachment} alt="attachment"></img>
              </IconButton>

              <div className="splitbutton">
                <Button onClick={handlePost}>Share</Button>
                <div className="arrowButton">
                  <ListItemIcon>
                    <ExpandMoreIcon />
                  </ListItemIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        {post.map((posttext) => (
          <Post post={posttext} />
        ))}
      </div>
    </div>
  );
}

export default PostPage;
