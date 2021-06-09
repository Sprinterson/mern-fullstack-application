import React from 'react';

import './NavLinks.css';

const NavLinks = props => {
    return <header className="main-header">
        {props.children}
    </header>
};

export default NavLinks;