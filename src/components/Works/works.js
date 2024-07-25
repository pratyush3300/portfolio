import React from "react";
import './works.css';
import designs1 from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\designs1.png';
// import designs2 from 'C:\\Users\\KIIT\\portfolio\\src\\assets\\designs2.png';
import designs3 from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\designs3.png';
import designs5 from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\designs5.png';

const Works = () => {
    return (
        // <section id='works'>
        //    <h2 className="worksTitle">My Portfolio</h2>
        //    <span className="worksDesc">I take pride in paying attention to the smallest details</span>
        //    <div className="worksImgs">
        //     {/* <img src= {designs1} alt="designs1" className="worksImg" /> */}
        //     <img src={designs2} alt="designs2" className="worksImg" />
        //     {/* <img src={designs3} alt="designs3" className="worksImg" /> */}
        //     {/* <img src={designs4} alt="designs4" className="worksImg" /> */}
        //    </div>
        // </section>


        <section id="works">
            <span className="worksTitle">My Portfolio</span>
            {/* <span className="skillDesc">I am a passoniate web designer with experience in creating visually appealing and user-friendly websites. I have as good understanding of design and a keen eye for detail. </span> */}
            <div className="worksImgs">

                <div className="workBar" id="workskill">
                    <img src={designs3} alt="designs3" className="worksImg"  id="designs" />
                    <div className="work">
                        <h2>ChatBot Design</h2>
                        <p>I took part in Smart India Hackathon recently with my team. My roll was in the team was to make UI for our project which was a chatbot for the Minisrty of Coal.</p>
                    </div>
                </div>

                <div className="workBar" id="workskill">
                    <img src={designs5} alt="designs5" className="worksImg" id="designs" />
                    <div className="work">
                        <h2>FURNI HOUSE</h2>
                        <p>Revolutionizing Furniture Shopping: Experience Aesthetic Excellence!🌟 Hope you guys like this #Ecommerce #FurnitureDesign #UIUX #AestheticApp #CoolInnovation</p>
                    </div>
                </div>

                <div className="workBar" id="workskill">
                    <img src={designs1} alt="designs1" className="worksImg" id="designs" />
                    <div className="work">
                        <h2>UI/UX Design</h2>
                        <p>"Sleek Sounds, Smooth Design: Your Daily Dose of Musical Elegance."</p>
                        <p>User-Friendly Beats: Elevate Your Experience with Our Stylish UI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works