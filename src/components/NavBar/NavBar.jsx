import { Link } from "react-router-dom";
import "../NavBar.css"

const NavBar = () => {
    return (
       <nav>
        <Link to ="/">Landing</Link>
        
        <div className="paths">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
        <Link to="projects"> Projects</Link>
        <Link to="/technologies">Technologies</Link>
        </div>

       </nav>
    );
}

export default NavBar