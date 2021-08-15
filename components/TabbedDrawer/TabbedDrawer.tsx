import React, { useState, useEffect } from 'react';
import './tabbeddrawer.css'

function TabbedDrawer() {

    const data = [
        {
            id: 1,
            title: 'one',
            text: 'one'
        },
        {
            id: 2,
            title: 'two',
            text: 'two'
        },
        {
            id: 3,
            title: 'three',
            text: 'three'
        }
    ]

    const [ activeTab, setActiveTab ] = useState(data[0]);
    const [ open, setOpen ] = useState(false);

    const expand = event => {
        event.preventDefault();
        console.log('e :>> ', event);
        const bar = document.getElementById('bar');
        const content = document.getElementById('content');
        if (bar.classList.contains('expand')) {
            bar.classList.remove('expand');
            content.classList.remove('expand');
            setOpen(false);
        } else {
            bar.classList.add('expand');
            content.classList.add('expand');
            setOpen(true);
        }
    }

    const setTarget = event => {
        event.preventDefault();
        console.log('event.target :>> ', event.target.value);
        setActiveTab(data[event.target.value]);
    }

    return (
        <div className="page drawer">
            content
            <div className="bar" id="bar" onClick={(e) => expand(e)}>
                {!open && <i className="fas fa-chevron-up fa-5x"></i>}
                {open && <i className="fas fa-chevron-down fa-5x"></i>}
            </div>
            <div className="content" id="content">
                <ul className="tabs" id="tabs">
                    {data.map(title => {
                        return (
                            <li className="tab" key={title.id} value={title.id - 1} onClick={e => setTarget(e)}>
                                <span>{title.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className="active">
                    {activeTab.title}
                </div>
            </div>
        </div>
    )
}

export default TabbedDrawer;