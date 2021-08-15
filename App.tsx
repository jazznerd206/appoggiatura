import React, { useState, useEffect, useContext, useReducer } from 'react';
import { AppContext, Theme, Authenticated } from './context/app.context';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

    const [theme, setTheme] = React.useState(Theme.Light);
    const [ isLoggedIn, setIsLoggedIn ] = useState(Authenticated.Out)
    
    console.log('isLoggedIn :>> ', isLoggedIn);

    return (
        <AppContext.Provider value={{ theme, setTheme, isLoggedIn, setIsLoggedIn }}>
            <div className="single-page">
                <Hero />
                <Body />
                <Footer />
            </div>
        </AppContext.Provider>
    )
}

export default App
