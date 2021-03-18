import React from 'react';
import Main from './Main';
import Aside from './Aside';
import './Wrapper.css';

export default function Wrapper() {
    return (
        <div className = "wrapper">
            <Main></Main>
            <Aside></Aside>
        </div>
    )
}