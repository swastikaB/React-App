import React from 'react';
import classes from './Spinner.css';

const spinner = () => {
    return (
        <div className={classes.Loader}>Loading...</div> //Loading is the fall . back text in case the css does not work
    );
};

export default spinner; 

