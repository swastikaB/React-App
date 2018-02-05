import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    backdropClickHandler = ()=> {
        this.setState({showSideDrawer: false});
    }

    toggleButtonHandler = () => {
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
    }

    render() {
        return (
            <Aux>
                <div>
                    <Toolbar toggleSideDrawer={this.toggleButtonHandler}/>
                    <SideDrawer open={this.state.showSideDrawer}
                         backdropClicked={this.backdropClickHandler}/>
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
export default Layout;