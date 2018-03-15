import React from 'react';
import PropTypes from 'prop-types';



const Navbar = ({datos}) => (
    <navbar className ="navbar"> 
        {datos.map((fras,i) => (
        <a key={i}>{fras}</a>))
        }
    </navbar>
);

Navbar.propTypes = {
    datos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Navbar;