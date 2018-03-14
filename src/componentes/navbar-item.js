import React from 'react';

const NavbarItems = ({cosas}) => (
    cosas.map(e => <a>{e.title}</a>)

)

export default NavbarItems;