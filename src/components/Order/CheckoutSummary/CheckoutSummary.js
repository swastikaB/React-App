import React from 'react';
import Pizza from '../../Pizza/Pizza';
import classes from './CheckoutSummary.css';
import Button from '../../UI/Button/Button';
const checkoutSummary = (props) => {
    console.log(props);
    
     return (
          
          <div className={classes.CheckoutSummary}>
             <h1>You have built a good Burger</h1>
             <div style={{width:'100%', margin: 'auto'}}>
                <Pizza ingredients={props.ingredients}/>
                <Button btnType="Danger"
                clicked={props.cancelClicked}> Cancel
                </Button>
                <Button btnType="Success"
                clicked={props.continueClicked}> Continue
                </Button>
            </div>
         </div>
     );
}

export default checkoutSummary;