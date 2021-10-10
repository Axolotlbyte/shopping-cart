import React from "react";
import "../styles/footer.css"
import github from "../images/github-logo.png"

const Footer = () => {
    return (
        <div className="footer-cont">
            <a href='https://github.com/Axolotlbyte'>
                <ul className=''>
                    <li className='footer-list'>
                        <img src={github} className='github-img'/>
                    </li>
                    <li className='footer-text'>
                        axolotbyte
                    </li>
                </ul>
            </a>
        </div>
    )
}

export default Footer