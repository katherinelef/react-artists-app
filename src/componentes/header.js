import React from 'react';
import Navbar from './navbar';

const frases =  ['Inicio', 'Nosotros', 'Ellos', 'Menu']

const Header = () => (
    <div>
    <Navbar datos ={frases} />
     </div>
)

export default Header;