import React from 'react';
import classes from './Order.css';
const order = (props) => {
   let ingredient = [];
    for(let key of Object.entries(props.ingredients)){
        console.log(key);
           ingredient.push( <li key={key} > {key[0]} : {key[1]} </li> );
        }
    return (
        <div className={classes.Order}>
            <p style={{textTransform: 'Capitalize'}}>Ingredients: {ingredient}</p>
            <p>Price <strong> USD: {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>

    );
}

export default order;