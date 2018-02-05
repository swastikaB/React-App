import React, {Component} from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class PizzaIngredients extends Component{
     
    render(){
        let ingredients = null;
        switch(this.props.type){
            case ('bread-bottom'):   
                ingredients = (
                    <div className={classes.BreadBottom}>
                        
                    </div>
                );
                break;
            case ('bread-top'):
                ingredients = (
                    <div className={classes.BreadTop}>
                    </div>
                );
                break;
            case ('salad'):
                ingredients = (
                    <div className={classes.Salad}>
                    </div>
                );
                break;
            case ('meat'):
                ingredients = (
                    <div className={classes.Meat}>
                    </div>
                );
                break;
            case ('cheese'):
                ingredients = (
                    <div className={classes.Cheese}>
                    </div>
                );
                break;
        }
        return ingredients;
    }
} 
PizzaIngredients.propTypes = {
    type: PropTypes.string.isRequired
};


export default PizzaIngredients;