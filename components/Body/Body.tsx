import React, { useState, useEffect } from 'react';
import '../../App.css';

function Body() {

    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 5000);
    }, [])

    return (
        <div className="page">
            <div>
                {loaded == false && <div>that one</div>}
                {loaded == true && <div>this</div>}
            </div>
        </div>
    )
}

export default Body;
