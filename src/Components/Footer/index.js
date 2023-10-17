import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from './logo.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return(
        <footer className={styles.Footer}>
             <Link to="./">
                <img src={logo} alt="logo inazuma"></img>
           </Link>
           <span className={styles.redes}>
            <a href="https://www.linkedin.com/in/fernando-oliveira-0001a0236/"><FaLinkedin/></a>
            <a href="https://github.com/Fezinh0"><FaGithub/></a>
           </span>
            <span>Copyright © 2023 by Inazuma Eleven | All Rights Reserved</span>
        </footer>
    )
}

export default Footer;