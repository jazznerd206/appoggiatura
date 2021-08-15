import React, { useState, useEffect, useContext, useReducer } from 'react';
import { AppContext, Theme, Authenticated } from './context/app.context';
import Hero from './components/Hero/Hero';
import TabbedDrawer from './components/TabbedDrawer/TabbedDrawer';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

    const [theme, setTheme] = React.useState(Theme.Light);
    const [ isLoggedIn, setIsLoggedIn ] = useState(Authenticated.Out)
    
    console.log('isLoggedIn :>> ', isLoggedIn);

    useEffect(() => {
        let body = document.getElementsByTagName('body');
        if (body[0].classList.contains('dark')) {
            body[0].classList.remove('dark');
            body[0].classList.add('light');
        } else {
            body[0].classList.remove('light');
            body[0].classList.add('dark');
        }
    }, [theme])

    return (
        <AppContext.Provider value={{ theme, setTheme, isLoggedIn, setIsLoggedIn }}>
            <div className="single-page">
                <Hero />
                <TabbedDrawer />
                <Body />
                <Footer />
            </div>
        </AppContext.Provider>
    )
}

export default App
