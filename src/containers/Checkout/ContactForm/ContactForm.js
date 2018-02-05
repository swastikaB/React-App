import React, { Component } from 'react';
import classes from './ContactForm.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axiosOrders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false,
        price: 0
    }

    finalOrderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        //alert("You Burger will be ready in a minute");
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, //should actually calculate price in the server to avoid user manipulations
            customer: {
                name: "Swasti Bhat",
                address: {
                    street: "Hello Street",
                    city: "Sunnyvale",
                    zipcode: "97654"
                },
                email: "swastibhat.com"
            },
            deliveryMethod: "Fastest"
        };
        
        axios.post('orders.json', order)
        .then((response) => {
            if (response)
                console.log("Order " + response + " SUCCESSFUL");
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch((error) => {
            console.log ("[PizzaBuilder]: Could not post data: " + error);
            this.setState({loading: false});
        });
       
    }

    render (){
        let form = (<form>
                    <input type="text" className={classes.Input} name="name" placeholder="Enter your name" />
                    <input type="text" className={classes.Input} name="email" placeholder="Enter your email-id" />
                    <input type="text" className={classes.Input} name="street" placeholder="Enter your street" />
                    <input type="text" className={classes.Input} name="postalCode" placeholder="Area - code" />
                    <Button btnType="Success" clicked={this.finalOrderHandler} > ORDER </Button>
                </form>);
        if(this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactForm}>
                <h4> Enter your Contact Information </h4>
                {form}
            </div>
        );
    }
}

export default ContactForm;