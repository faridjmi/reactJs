import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <>
    <nav className="navbar">
        <h1>The Mfk Blog</h1>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/create"> New Blog </Link>
        </div>
    </nav>
    </> );
}
 
export default Navbar;