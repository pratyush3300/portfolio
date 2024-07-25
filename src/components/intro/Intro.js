import React from "react";
import './intro.css';
import bg from '../../assets/IMG_20230304_204714.jpg';
import { Link } from 'react-scroll'; 


const Intro = () =>{
    return (
        
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Pratyush Prasoon</span> <br /></span>
                <p className="introPara">A passionate web developer and UI/UX designer, <br /> I bring digital visions to life, crafting seamless experiences <br />that marry innovation with aesthetic finesse.</p>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}
export default Intro 