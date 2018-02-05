import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
/*class OrderSummary extends Component {

    componentWillUpdate(){
        console.log("[Order Summary] will Update");
    }
    
    render(){ */
    const orderList = Object.keys(props.ingredients)
        .map( (igKey) => {
            return (
                <li key={igKey}> <span style={{textTransform: 'capitalize'}}>
                    {igKey}:
                    </span>
                    {props.ingredients[igKey]}
                </li>
            );
        });
   return (

        <Aux>
            <h3> Your Order </h3>
            <p> Your delicious burger will have </ p>
            <ul>
                {orderList}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ? </p>
            <Button btnType="Danger" clicked={props.cancelClicked}> 
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.continueClicked}> 
                Continue
            </Button>
        </Aux>    
    )
   // }

} 

export default orderSummary;