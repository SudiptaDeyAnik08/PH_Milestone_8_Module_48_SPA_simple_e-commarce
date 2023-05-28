import React from 'react'

import Header from '../Header/Header.js'

import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Main;