import React, { useState } from "react";
import Post from "../model/Post";
import PostForm from "./PostForm";
import './PostInList.css';
import SocialPosts from "./SocialPosts";

interface Props {
    post: Post;
    onDelete?: () => void;
}

function PostInList({post, onDelete}: Props) {
 
    return (
        <div className="PostInList" >
            <p> 
                <h3>{post.title}</h3> 
                <p>{post.thought}</p>
                <button onClick={onDelete} >Delete</button>
            </p>
        </div>
    )
}

export default PostInList;