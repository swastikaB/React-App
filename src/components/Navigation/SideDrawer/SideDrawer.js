import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let toggleClassName = [classes.SideDrawer];
   toggleClassName.push(props.open ? classes.Open : classes.Close);

    return (
        <Aux>
            <Backdrop 
                    show={props.open}
                    clicked={props.backdropClicked}
                />
            <div className={toggleClassName.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;