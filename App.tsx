import React from 'react';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

    return (
        <div className="single-page">
            <Hero />
            <Body />
            <Footer />
        </div>
    )
}

export default App
