import React from 'react';
import Navbar from './navbar';

const frases =  [{id:1, title:'Inicio'},
                    {id:2, title:'Nosotros'},
                    {id:3, title:'Ellos'},
                    {id:4, title:'Menu'}
                ]

const Header = () => (
    <div>
    <Navbar datos ={frases} />
     </div>
)

export default Header;