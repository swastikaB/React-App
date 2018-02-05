import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
        <Layout>
          <Switch>
            <Route path="/orders"  component={Orders} />
            <Route path="/checkout"  component={Checkout} />
            <Route path="/" component={PizzaBuilder} />
          {/*<PizzaBuilder/>
          <Checkout /> */}
          </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
