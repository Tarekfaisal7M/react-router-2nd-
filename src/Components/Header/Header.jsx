import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>The navBar</h2>
            <br />
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            
        </div>
    );
};

export default Header;