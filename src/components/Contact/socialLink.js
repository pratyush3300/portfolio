import React from 'react';
import './sociallink.css';
import LinkedinIcon from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\Untitled.png';
import TwitterIcon from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\x.png';
import Instagram from 'C:\\Users\\KIIT\\Pratyush-Portfolio-React\\src\\assets\\insta logo.avif';

const SocialLinks = () => {
    return (
        <div className='socialLink' id='sociaLinks'>
 
            <a href="https://www.linkedin.com/in/pratyush-prasoon-a6a8a9267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="LinkedinIcon" className='socialicons' />
            </a>

            <a href="https://www.instagram.com/_.pratyush_3300?igsh=ampoc2h5cGdsa2xj" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className='socialicons' />
            </a>

            <a href="https://x.com/Pratyush3300?t=-cx_ENAxgkv0jImdev4Axw&s=08" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="TwitterIcon" className='socialicons' />
            </a>
        </div>
    );
};

export default SocialLinks;

