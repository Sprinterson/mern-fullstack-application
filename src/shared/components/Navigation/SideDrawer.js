import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    return <header className="main-header">
        {props.children}
    </header>
};

export default SideDrawer;