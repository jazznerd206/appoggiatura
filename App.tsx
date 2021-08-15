import React, { useState, useEffect, useContext, useReducer } from 'react';
import { ThemeContext, Theme } from './context/app.context';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

    const [theme, setTheme] = React.useState(Theme.Light);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="single-page">
                <Hero />
                <Body />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
