import React, {useState} from 'react';
// import React from "react";
import './navbar.css';
// import logo from 'C:\\Users\\KIIT\\portfolio\\src\\assets\\logo.jpg';
import { Link } from 'react-scroll';
import Frame3 from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\Frame3.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            
            <div className="desktopMenu">
                <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">&#60;/Home&#62;</Link>
                <Link activeClass='active' to='skills'spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">&#60;/Skills&#62;</Link>
                <Link activeClass='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">&#60;/Portfolio&#62;</Link>
                <Link activeClass='active' to='contact'spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">&#60;/Contact Me&#62;</Link>
            </div>

            <img src={Frame3} alt="Frame3" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>

            <div className="navmenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro'spy={true} smooth={true} offset={-100} duration={500}  className="listItem"onClick={()=>setShowMenu(false)}>&#60;/Home&#62;</Link>
                <Link activeClass='active' to='skills'spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>&#60;/Skills&#62;</Link>
                <Link activeClass='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>&#60;/Portfolio&#62;</Link>
                <Link activeClass='active' to='contact'spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>&#60;/Contact Me&#62;</Link>
                {/* <Link activeClass='active' to='contactme'spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>&#60;/Contact&#62;</Link> */}
            </div>
        </nav>
    )
}
export default Navbar