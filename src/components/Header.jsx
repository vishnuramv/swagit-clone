import React, { useState } from 'react'
import '../styles/header.css';
import header_Img1 from '../assets/headerimg1.png';
import header_Img2 from '../assets/headerimg2.png';


const Header = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className="header">
            <header className="header__head">
                <div className="header__container">
                    <div className="header__logoCont">
                        <a className="header__logo" href="/">
                            SWAGIT
                        </a>
                        <div onClick={() => setOpenNav(!openNav)}>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <nav className={`header__nav ${openNav ? "" : "header__navHide"}`}>
                        <a className="header__links" href="https://www.swagit.in/your-lookbook">
                            Your Lookbook
                        </a>
                        <a className="header__links" href="https://www.swagit.in/get-style-page">
                            Get Styled
                        </a>
                        <a className="header__links" href="https://www.swagit.in/our-story">
                            Our Story
                        </a>
                        <a className="header__links" href="/">
                            Login
                        </a>
                    </nav>
                </div>
            </header>
            <div className="header__sub">
                <a href="https://www.swagit.in/your-lookbook" className="header__sublink">
                    <img src={header_Img1} alt="closth_icon" />Your Lookbook
                </a>
                <a href="https://www.swagit.in/get-style-page" className="header__sublink">
                    <img src={header_Img2} alt="fashion_icon" />Get Styled
                </a>
            </div>
        </div>
    )
}

export default Header
