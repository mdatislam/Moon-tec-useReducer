import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './../Pages/Home';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <Navbar /> 
            <Outlet/>
        </div>
    );
};

export default Main;