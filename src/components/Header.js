import React from 'react'
import {FaGithub } from "react-icons/fa"
const Header = () => {
    return (
        <header>
            <nav className="navbar" id="headerbar">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#portfolio">PortFolio</a>
                    </li><li>
                        <a href="#skill">Skill</a>
                    </li>
                    {/* <li>
                        <h1><a href="https://twitter.com/Sou021102"><FaTwitter size={25} /></a></h1>
                    </li> */}
                    <li>
                        <h1><a href="https://github.com/sou004002"><FaGithub size={25} /></a></h1>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header