import React from 'react';
import './style.css';
import location from './locationtransparent.png';
import mail from './mailtransparent.png';
import github from './GitHub-Mark-Light-32px.png';
import linkIn from './linkInLogo.jpg';

function Header(){
    return(
        <div id="divHeader">
            <h1>Tijan Jackson</h1>
            <h2>Full Stack Web Developer</h2>
            <br></br>
            <img id="loc" src={location} alt="location"></img>
            <span>Cape Town, South Africa</span>
            <br></br>
            <br></br>
            
            <span><a id="email" href="mailto:tijanj02@gmail.com" subject="subject text"><img id="mai" src={mail} alt="mail"></img>tijanj02@gmail.com</a></span>
            <br></br>
            <p>Cell: 0636805753</p>
            <br></br>
            <a href="https://github.com/TijanJackson"><img id="github" src={github} alt="githubLogo"></img></a>
            <a href="https://www.linkedin.com/in/tijan-jackson-30905919b/"><img id="linkIn" src={linkIn} alt="linkInLogo"></img></a>
        </div>
    )
}

export default Header;