import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './header.css'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt='Logo' />
            <nav>
                <NavLink to='/' className='header_lien header_lien_acceuil'>Acceuil</NavLink>
                <NavLink to='/about' className='header_lien header_lien_about'>A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;