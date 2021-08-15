import React, { useState, useEffect } from 'react';
import { useScroll } from '../../utills/hook.scrollHeight';
import '../../App.css';
import './hero.css';

function Hero() {

    const curr = useScroll();

    // useEffect(() => {
    //     const hero = document.getElementById('hero');
    //     const menu = document.getElementById('menu');
    //     if (curr.scrollY > 50) {
    //         hero.classList.add('hero-scroll');
    //     } else {
    //         hero.classList.remove('hero-scroll');
    //     }
    // }, [curr])

    return (
        <div className="page hero" id="hero">
            <div className="title"><h1>Title/Logo</h1></div>
            <div id="menu">
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero;
