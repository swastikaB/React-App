import React, { Component } from 'react';
import classes from './Orders.css';
import Order from '../../components/Order/Order';
import axios from '../../axiosOrders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    state = {
        orders: null
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then((response)=> {
            console.log(response.data);
            this.getOrders(response.data);
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    getOrders = (ordersObj) => {
        let ordersList = [];
        for( let key of Object.entries(ordersObj)){
            //console.log(key);
            let ingredients  = key[1].ingredients;
            let price = key[1].price;
            let orderObj = {
                ingredients: ingredients,
                price: price,
                id: key[0]
            }
            ordersList.push(orderObj);
        }
        this.setState({orders: ordersList});

    }

    render(){
        let order = <Spinner />;
        if(this.state.orders){ 
            order =  this.state.orders.map( (obj) => {
                console.log(obj.ingredients);
                return (<Order key={obj.id}
                ingredients={obj.ingredients}
                price={obj.price}
                />);
            });
        }
        return (
            <div className={classes.Orders}>
                {order}
            </div>
        );
    }
}


export default withErrorHandler(Orders, axios);