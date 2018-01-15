import React from 'react';
import { Route, Link } from 'react-router-dom'
import Header from '../header'
import Main from '../main'

const App = () => (

    <div  style={{display: 'flex', flexDirection: 'row'}}>
        <Header />
        <Main />
    </div>
       
)

export default App