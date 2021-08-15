import React, { useState, useEffect, useContext } from 'react';
import { AppContext, getContext, Theme } from '../../context/app.context';
import '../../App.css';
import './body.css';

function Body() {

    const { theme, setTheme, isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    if (isLoggedIn === 0) {
        return (
            <div className="page body">
                <button onClick={() => setIsLoggedIn(1)}>
                    login
                </button>
            </div>
        )
    } else {
        return (
            <div className="page body">
                <h1>sup</h1>
                <button onClick={() => setTheme(theme === 'Light' ? Theme.Dark : Theme.Light)}>
                        switch to {theme === 'Light' ? 'dark' : 'light'} theme
                    </button>
                <div className="page body">
                    <button onClick={() => setIsLoggedIn(0)}>
                        logout
                    </button>
                </div>
            </div>
        )
    }
    
}

export default Body;
