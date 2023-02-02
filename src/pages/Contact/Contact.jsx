import { Link } from "react-router-dom";
import {FaGithub  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaEnvelope  } from "react-icons/fa";
import {  } from "react-icons/fa";



const Contact = () => {
    return (
        <>
        <main>
        <h1>Contact</h1>
       <Link to="https://github.com/Kay7531"> <FaGithub/></Link>
       <Link to="https://www.linkedin.com/in/kautharmumin33/"><FaLinkedin/></Link>
        <a href="kauth333@gmail.com"><FaEnvelope/></a>
        
        </main>
        </>
    );
}

export default Contact