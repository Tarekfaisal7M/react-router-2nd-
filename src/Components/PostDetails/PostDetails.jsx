import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h2>post details about :{title} </h2>
            <p><small>{body}</small></p>
            <h3>This is ID :{id}</h3>
        </div>
    );
};

export default PostDetails;