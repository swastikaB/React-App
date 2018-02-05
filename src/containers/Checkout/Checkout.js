import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactForm from './ContactForm/ContactForm';
class Checkout extends Component {
    state = {
        ingredients:null /*{
            cheese: 1,
            salad: 1,
            meat: 1
        }*/,
        price: 0
    }
    
    componentWillMount = () => {
        console.log("[Checkout.js] componentDidMount");
        const queryArray  = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price;
        for( let queryElem of queryArray.entries()){
            if(queryElem[0] === 'price'){
                price = queryElem[1];
            }else{
                ingredients[queryElem[0]] = +queryElem[1];
            }
        }
        if(Object.keys(ingredients).length !== 0){
            this.setState({ingredients: ingredients, price: price});
        }
        this.setState({ingredients: ingredients, price: price});
        console.log(this.state.ingredients);
    }
    

    cancelClickHandler = () => {
        this.props.history.goBack();
    }

    continueClickHandler = () => {
        this.props.history.replace('/checkout/contact-form')
    }

    render() {
        console.log("Inside Checkout" + this.state.ingredients);
        return (
            <div>
             <CheckoutSummary 
                ingredients={this.state.ingredients}
                cancelClicked={this.cancelClickHandler}
                continueClicked={this.continueClickHandler}
            />
            <Route path={this.props.match.path + "/contact-form"} 
                render={(props) => <ContactForm ingredients={this.state.ingredients} price={this.state.price} {...props}/> }/>
            </div>
        );
    }
}

export default Checkout;