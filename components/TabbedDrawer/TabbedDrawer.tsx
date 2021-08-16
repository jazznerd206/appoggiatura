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

    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const [ activeTab, setActiveTab ] = useState(data[0]);
    const [ open, setOpen ] = useState(false);

    const reveal = () => {
        const drawer = document.getElementById('drawer');
        drawer.style.transform = 'translate(-50%, -60%)';
        const icon = document.getElementById('icon');
        icon.style.top = '5px';
        icon.style.bottom = 'unset';
        const bar = document.getElementById('bar');
        const content = document.getElementById('content');
        bar.style.display = 'flex';
        content.style.display = 'flex';
        setDrawerOpen(true);
        return;
    }

    const hide = () => {
        const drawer = document.getElementById('drawer');
        drawer.style.transform = 'translate(-50%, -140%)';
        const bar = document.getElementById('bar');
        const content = document.getElementById('content');
        bar.style.display = 'none';
        content.style.display = 'none';
    }

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
        return;
    }

    const setTarget = event => {
        event.preventDefault();
        console.log('event.target :>> ', event.target.value);
        setActiveTab(data[event.target.value]);
        return;
    }

    useEffect(() => {
        const element = document.getElementById('drawer');
        console.log('element :>> ', element);
        const bar = document.getElementById('bar');
        const content = document.getElementById('content');
        bar.style.display = 'none';
        content.style.display = 'none';
    }, [])

    return (
        <div className="page drawer" id="drawer">
            <div className="panel-content">
                <i 
                    className="far fa-envelope-open fa-5x" 
                    id="icon" 
                    onClick={drawerOpen === true ? () => hide() : () => reveal()}
                ></i>
            </div>
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