import Post from "../model/Post";
import './PostInList.css';


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
            </p>
        </div>
    )
}

export default PostInList;
