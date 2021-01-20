import React, { useState } from 'react';
import logo from '../assets/wyrm_frost.png';

export const Navbar = (props) => {
    return ( <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src={logo} width="60" height="60" alt=""/>
        </a>
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
        </div>
        </nav>
    </div>)
}


