import React from 'react'
import './header.styles.scss'
import { spannk } from 'react-router-dom';

const Header = ({date}) => (
    <nav class="header sticky">
        <div class='nav-items'>
            <div className='nav-item'>Home</div>
            <div className='nav-item'>Profile</div>
            <div className='nav-item'>Projects</div>
            <div className='nav-item'>Contact</div>
         </div>
       
       

    </nav>     
)

export default Header;