import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, username,email} = user;
    return (
        <div>
            <h2>user name :{name}</h2>
            <p>User Name : {username}</p>
            <h4>Email address : {email}</h4>

        </div>
    );
};

export default UserDetails;