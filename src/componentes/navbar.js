import React from 'react';



const Navbar = ({datos}) => (
    <navbar className ="navbar"> 
        {datos.map((fras) => (
        <a key={fras.id}>{fras.title}</a>))
        }
    </navbar>
);

export default Navbar;