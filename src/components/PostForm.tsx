import Post from '../model/Post';
import { useState, FormEvent } from "react";
import './PostForm.css';

interface Props {
    onSubmit: (title: Post, thought: Post) => void;
  }

function PostForm () {
    const [ title, setTitle ] = useState(" ");
    const [ thought, setThought ] = useState(" ");
 

    return (
        <form className="PostForm">
                <label> Title: 
                <input type="text" className="title" onChange={e => setTitle(e.target.value)} value={title} />
                </label>
                <label> Thought: 
                <input type="text" className="thought" onChange={e => setThought(e.target.value)} value={thought} />
                </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PostForm;