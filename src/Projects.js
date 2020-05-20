import React from 'react';
import './style.css';

function Projects() {
    return(
        <div>
            <h2>Projects</h2>
            <h3>Online Store</h3>
            <a href="https://github.com/TijanJackson/onlineStoreProject" target="_blank" rel="noopener noreferrer" className="pLink">Link to github repository</a>
            <br></br>
            <br></br>
            <h3>Logic Puzzle Game</h3>
            <a href="https://github.com/TijanJackson/gameProject" target="_blank" rel="noopener noreferrer" className="pLink">Link to github repository</a>
            <br></br>
            <br></br>
            <h3>Weather App</h3>
            <a href="https://github.com/TijanJackson/Weather-App" target="_blank" rel="noopener noreferrer" className="pLink">Link to github repository</a>
            <br></br>
            {/* <br></br>
            <a href="https://weather-app-that-has-a-name.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="pLink">Link to Heroku Deployed App</a> */}
        </div>
    )
}

export default Projects;