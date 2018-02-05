import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const buildControls = (props) => {

    const controls = [
        {label: "Salad " , type: "salad"},
        {label: "Meat" , type: "meat"},
        {label: "Cheese", type: "cheese"}
    ];

    const controlsElements = controls.map(ctr => (
        <BuildControl 
        label={ctr.label} 
        key={ctr.label} 
        more={() => props.addIngredient(ctr.type)}
        less={() => props.removeIngredient(ctr.type)}
        disable={props.disableLessButton[ctr.type]}/>
    ));
    return(
        <div className={classes.BuildControls}>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controlsElements}
            <button className={classes.OrderButton} onClick={props.orderNow} disabled={!props.purchaseable}>
                Order Now
            </button>
        </div>
    );
}

export default buildControls;