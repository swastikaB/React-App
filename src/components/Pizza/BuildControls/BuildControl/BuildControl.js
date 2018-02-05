import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button className={classes.less} onClick={props.less} disabled={props.disable}>Less</button>
        <button className={classes.more} onClick={props.more}>More</button>
    </div>
);

export default buildControl;