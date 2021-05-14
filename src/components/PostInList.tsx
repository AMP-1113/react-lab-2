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
                <h3 className="Title">{post.title}</h3> 
                <p className="Thought">{post.thought}</p>
                <button onClick={onDelete} >Delete</button>
                <span className="material-icons-outlined">delete</span>
            </p>
        </div>
    )
}

export default PostInList;
