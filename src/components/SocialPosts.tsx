import { useState } from "react";
import Post from "../model/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import './SocialPosts.css'

function SocialPosts() {
    const [ display, setDisplay ] = useState(false);
    const [ posts, setPosts ] = useState<Post[]>([
    ])

    function showForm() {
        setDisplay(true);
    }

    function hideForm() {
        setDisplay(false);
    }

    function handleDeletePost(index: number): void {
        setPosts(prevPosts => [
          ...prevPosts.slice(0, index),
          ...prevPosts.slice(index + 1)
        ]);
      }

    function handleAddPost(post: Post): void {
        // immutable add
        setPosts([ ...posts, post ]);
        setDisplay(false);
      }

      const closeButton = <button type="button" className="close" onClick={ hideForm }>X</button>

    return (
        <div className="SocialPosts">
            <header className="Header">
                <h1>My Thoughts</h1>
            </header>
            <div className={"formContainer"}>
                {display &&
                    <>
                    {closeButton}
                <PostForm onSubmit={handleAddPost} /> 
                </> }

            </div>
            <button className="newThoughtButton" onClick={showForm}>New Thought</button>
            <div className="PostContainer">
            {posts.map((post, i) => 
                    <PostInList key={i} post={post} onDelete={ () => handleDeletePost(i)}/>
                )}
            </div>
        </div>
    )
}


export default SocialPosts;