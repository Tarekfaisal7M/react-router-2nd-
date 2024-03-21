import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, phone, email} = user;

    const userStyle = {
        border : '2px solid red',
        padding : '10px',
        borderRadius : '20px'
        // mgin : '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <p>phone : {phone}</p>
            <p>Email : {email}</p>
            {/* ekhane clicme button akhono ready hoi ni */}
            <Link to ={`/user/${id}`}><button>click me</button></Link>
        </div>
    );
};

export default User;