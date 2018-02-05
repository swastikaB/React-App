import React from 'react'
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDrawer from '../SideDrawer/ToggleSideDrawer/ToggleSideDrawer';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <ToggleSideDrawer clicked={props.toggleSideDrawer} />
            <div><Logo/></div>
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
      
        </header>
    );  
}

export default toolbar; 