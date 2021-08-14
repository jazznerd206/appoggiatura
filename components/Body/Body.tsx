import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import '../../App.css';

function Body() {

    const ctx = useContext(AppContext);

    useEffect(() => {
        console.log('ctx from body :>> ', ctx);
    }, [])

    return (
        <div className="page">
        </div>
    )
}

export default Body;
