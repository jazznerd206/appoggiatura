import React, { useState, useEffect, useContext, useReducer } from 'react';
import { AppContext } from './context/app.context';
import { reducer } from './context/reducer';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

    const [ state, dispatch ] = useReducer(reducer, AppContext);
    
    useEffect(() => {
        
    }, [])

    return (
        <AppContext.Provider value={{ state, dispatch } }>
            <div className="single-page">
                <Hero />
                <Body />
                <Footer />
            </div>
        </AppContext.Provider>
    )
}

export default App
