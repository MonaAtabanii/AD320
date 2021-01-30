import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <div className = 'nav'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">ContactUs</a></li>
                <li><a href="">Login/Register</a></li>
            </ul>
        </div>
    )
}