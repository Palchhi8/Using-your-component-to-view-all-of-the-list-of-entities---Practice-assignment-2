// components/PostCard.jsx
import React from "react";
import LikeButton from "./likebutton";
import "../App.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.profilePic} alt={post.username} className="profile-pic" />
        <h3 className="username">{post.username}</h3>
      </div>
      <p className="post-content">{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
