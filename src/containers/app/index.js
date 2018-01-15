import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Header from '../header'
import Main from '../main'

import './App.css';

const App = () => (

    <div  style={{display: 'flex', flexDirection: 'row'}}>
        <Header />
        <Main />
    </div>
       
)

export default App