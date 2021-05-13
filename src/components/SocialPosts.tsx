import { title } from "process";
import React, { useState } from "react";
import Post from "../model/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import './SocialPosts.css'

function SocialPosts() {
    const [ display, setDisplay ] = useState(false);
    const [ posts, setPost ] = useState<Post[]>([
      
    ])

    function showForm() {
        setDisplay(true);
    }
    
    return (
        <div className="SocialPosts">
            <header className="Header">
                <h1>My Thoughts</h1>
            </header>
            <div className="formContainer" >
                {display && <PostForm /> }
            </div>
            <button id="newThoughtButton" onClick={showForm}>New Thought</button>
            <div className="PostContainer">

            </div>
        </div>
    )
}


export default SocialPosts;