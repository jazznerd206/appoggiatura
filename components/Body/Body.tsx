import React, { useState, useEffect, useContext } from 'react';
import { Theme, useTheme } from '../../context/app.context';
import '../../App.css';
import './body.css';

function Body() {

    const { theme, setTheme } = useTheme();
    console.log('theme :>> ', theme);

    return (
            <div className="page body">
                <button onClick={() => setTheme(theme === 'Light' ? Theme.Dark : Theme.Light)}>
                    switch to {theme === 'Light' ? 'dark' : 'light'} theme
                </button>
            </div>
    )
}

export default Body;
