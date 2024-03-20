import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {


    const users = useLoaderData();
    return (
        <div>
            <h2>our users : {users.length}</h2>
            <p>our users is smart and awesome</p>
            <div className="Users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;