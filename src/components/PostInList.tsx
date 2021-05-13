import { useState } from "react";
import Post from "../model/Post";
import './PostInList.css';

interface Props {
    post: Post;
    onDelete: (post: Post) => void;
}

function PostInList({post, onDelete}: Props) {

    // const [ posts, setPosts] = useState<Post[]>([
    //     { title: "Guitar", thought: "I love guitar" },
    //     { title: "Rock and Roll", thought: "I love Rock and Roll" },
    //     { title: "drums", thought: "drums are loud" },
    //   ]); 

    return (
        <div className="PostInList">
            
        </div>
    )
}

export default PostInList;