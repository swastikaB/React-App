import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import axios from '../../axiosOrders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICE = {
    cheese: 0.4,
    meat: 1.5,
    salad: 0.5
};
class PizzaBuilder extends Component{

    state = {
        ingredients: null /*{
            cheese: 0,
            meat: 0,
            salad: 0
        }*/,
        price: 4,
        purchaseable: false,
        showSummary: false,
        loading: false,
        error: false
    };

  
    componentDidMount(){
        console.log("[PizzaBuilder.js] component Did Mount")
        axios.get('ingredients.json')
        .then((response) => {
            this.setState({ingredients: response.data});
        }).catch((error) => {
            console.log("[PizzaBuilder.js]:" + error); 
            this.setState({error: true})
        });
        
    }

    
    
    updatePurchaseable = (newIngredients) => {
        let purchaseable = false;
        const ingredients = {...newIngredients};
        const numIngredients = Object.keys(ingredients).map((key) => ingredients[key])
            .reduce((sum, count) => sum += count);
        if(numIngredients > 0){
            purchaseable = true;
        }
        if(this.state.purchaseable !== purchaseable){
            this.setState({purchaseable: purchaseable});
        }
    }

    addIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients}
        const count = this.state.ingredients[type];
        newIngredients[type] = count + 1;
        const newPrice = this.state.price + INGREDIENT_PRICE[type];
        this.setState({ingredients: newIngredients, price: newPrice});
        this.updatePurchaseable(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients}
        const count = newIngredients[type];
        const newCount = count - 1;
        if(newCount >=0){
            newIngredients[type] = newCount;
            const newPrice = this.state.price - INGREDIENT_PRICE[type];
            this.setState({ingredients: newIngredients, price: newPrice});
            this.updatePurchaseable(newIngredients);
            //console.log("Price = " + newPrice);
        }
    }

    orderNowHandler = () => {
        this.setState({showSummary: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({showSummary: false});
    }

    continuePurchaseHandler = () => {
        let queryArray = [];
        for(let param in this.state.ingredients){
            //salad=1&cheese=2....
            let paramString = encodeURIComponent(param) + "=" + encodeURIComponent(+ this.state.ingredients[param]);
            queryArray.push(paramString);
        }
        let queryString = queryArray.join("&");
        this.props.history.push({
            pathname: "/checkout",
            search:  queryString + "&price=" + encodeURIComponent(this.state.price) 
        });
    }

    render(){
        let disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        } 

        let orderSummary = null;
        if(this.state.loading){
            orderSummary =  (<Spinner />);
        } else { 
            if(this.state.ingredients){
            orderSummary = (<OrderSummary ingredients={this.state.ingredients} 
                        continueClicked={this.continuePurchaseHandler}
                        cancelClicked={this.cancelPurchaseHandler}
                        price={this.state.price}/>)
            }
        }
        let pizza  = this.state.error ? <p> Ingredients can't be loaded  </p> :<Spinner />;
        if(this.state.ingredients){
            pizza = (<Aux>
                    <Pizza ingredients={this.state.ingredients}/>
                    <BuildControls addIngredient={this.addIngredientHandler}
                            removeIngredient={this.removeIngredientHandler}
                            disableLessButton={disabledInfo}
                            price={this.state.price}
                            orderNow={this.orderNowHandler}
                            purchaseable={this.state.purchaseable}
                    />
                    </Aux>)
        }

        return(
            <Aux>
                <Modal 
                    show={this.state.showSummary}
                    hide={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Modal>
                {pizza}
                
            </Aux>
        );
    }
}



export default withErrorHandler(PizzaBuilder,axios);

