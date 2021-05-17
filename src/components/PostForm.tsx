import Post from '../model/Post';
import { useState, FormEvent } from "react";
import './PostForm.css';

interface Props {
    onSubmit: (post: Post) => void;
  }

function PostForm ({onSubmit}: Props) {
    const [ title, setTitle ] = useState(" ");
    const [ thought, setThought ] = useState(" ");

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
    // on form submit get the data from the state
    // build our model object from the state
        const post: Post = {
            title: title,
            thought: thought
          };
          // send the model object to the parent via the callback prop
          onSubmit(post);
    
        // reset form
            setTitle("");
            setThought("");
    }

    return (
    <div>
         <form className="PostForm" onSubmit={handleSubmit}>
                <label> Title: 
                <input type="text" className="title" onChange={e => setTitle(e.target.value)} value={title} />
                </label>
                <label> Thought: 
                <input type="text" className="thought" onChange={e => setThought(e.target.value)} value={thought} />
                </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default PostForm;