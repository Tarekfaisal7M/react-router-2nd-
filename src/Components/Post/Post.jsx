import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    
    const postStyle = {
        border : '2px solid red',
        padding : '10px',
        borderRadius : '20px'
       
    }

    return (
        <div style={postStyle}>
            <h4>Post of id : {id}</h4>
            <p>{title}</p>
            <Link to ={`/post/${id}`}><button>Post details</button></Link>
        </div>
    );
};

export default Post;