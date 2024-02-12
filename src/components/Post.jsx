import React from "react";
import { Avatar } from "@mui/material";
import "../style/post.css";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/UserReducer";
const Post = ({name , description , message , photoURL}) => {

  const user = useSelector(selectUser);
  return (
    <div className="post">
      <div className="postInfo">
        <Avatar src="" >{user.email[0]}</Avatar>
        <div className="post-header">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-message">
        <p>
          {message}
        </p>
        <img
          src={photoURL}
          alt=""
        />
      </div>
      <div className="post-button">
        <div className="icon">
          <i className="fa-regular fa-thumbs-up"></i>
          <span>Like</span>
        </div>
        
        <div className="icon">
          <i className="fa-regular fa-comment-dots"></i>
          <span>Comments</span>
        </div>
       
        <div className="icon">
          <i className="fa-solid fa-share"></i>
          <span>Share</span>
        </div>
    
        <div className="icon">
          <i className="fa-solid fa-paper-plane"></i>
          <span>Send</span>
        </div>
       
      </div>
    </div>
  );
};

export default Post;
