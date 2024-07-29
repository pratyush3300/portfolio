import React from "react";
import './skills.css';
// import WebDesign from 'C:\\Users\\KIIT\\portfolio\\src\\assets\\website-graphic.jpg' ;  
import UIDesign from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\uiuxdesign.jpg';
import CLang from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\CLang.jpg';
import JAVA from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\JAVA.jpg';
import HTMLCSS from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\htmlandcss logo.png';
import JavaScript from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\JavaScript-logo.png';
import REACT from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\REACT logo.png';


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">My Skills</span>
            {/* <span className="skillDesc">I am a passoniate web designer with experience in creating visually appealing and user-friendly websites. I have as good understanding of design and a keen eye for detail. </span> */}
            <div className="skillBars" id="skillbar">
                <div className="skillsBar" id="webskill">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="uiskillText">
                        <h2>UI/UX</h2>
                    </div>
                </div>
                <div className="skillsBar" id="webskill">
                    <img src={CLang} alt="CLang" className="skillBarImg"/>
                    <div className="uiskillText">
                        <h2>C language</h2>
                    </div>
                </div>
                <div className="skillsBar" id="webskill">
                    <img src={JAVA} alt="JAVA" className="skillBarImg"/>
                    <div className="uiskillText">
                        <h2>JAVA</h2>
                    </div>
                </div>
                <div className="skillsBar" id="webskill">
                    <img src={HTMLCSS} alt="HTMLCSS" className="webskillImg" id="webimg" />
                    <div className="webskillText">
                        <h2>HTML/CSS</h2>
                    </div>
                </div>
                <div className="skillsBar" id="webskill">
                    <img src={JavaScript} alt="JavaScript" className="webskillImg" id="webimg" />
                    <div className="webskillText">
                        <h2>JavaScript</h2>
                        </div>
                    </div>
                 <div className="skillsBar" id="webskill">
                    <img src={Bootstrap} alt="Bootstrap" className="skillBarImg"/>
                    <div className="uiskillText">
                        <h2>Bootstrap/h2>
                    </div>
                </div>
                    <div className="skillsBar" id="webskill">
                    <img src={REACT} alt="REACT" className="webskillImg" id="webimg" />
                    <div className="webskillText">
                        <h2>React</h2>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Skills;
