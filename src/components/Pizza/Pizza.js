import React from 'react';
import PizzaIngredients from './PizzaIngredients/PizzaIngredients';
import classes from './Pizza.css';
const pizza = (props) => {

    const extraIngredients = Object.keys(props.ingredients).map((igKey) =>{
        return ([...Array(props.ingredients[igKey])].map((_ , idx) => {
            return (
                <PizzaIngredients type={igKey} key={igKey + idx} />
            );
        }));
    }).reduce((arr, elem) => arr.concat(elem));
    //console.log(extraIngredients.length);
    if(extraIngredients.length === 0){
        extraIngredients.push (
            <p key={0}>
                Add some ingredients here!
            </p>
        );
    }

    return (
        <div className={classes.Pizza}>
            <PizzaIngredients type="bread-top"/>
            {extraIngredients}
            <PizzaIngredients type="bread-bottom"/>
        </div>
    );
}


export default pizza;