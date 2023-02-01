import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
    return (
        <>
        <h1>Contact</h1>
       <Link to="https://github.com/Kay7531"><FontAwesomeIcon icon="fab fa-github-square" /> GitHub</Link>
       <Link to="https://www.linkedin.com/in/kautharmumin33/">LinkedIn</Link>
        <a href="kauth333@gmail.com">Email</a>
        </>
    );
}

export default Contact