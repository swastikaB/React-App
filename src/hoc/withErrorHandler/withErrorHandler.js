import React, {Component} from 'react';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount(){
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log(error.message);
                this.setState({error: error});
            });

            this.reqInterceptor = axios.interceptors.request.use(req => {
                //console.log("error = " + this.state.error);
                this.setState({error: null});
                return req;
            });
        }
        componentDidMount(){
            axios.interceptors.response.use(res => res, error => {
                console.log(error.message);
                this.setState({error: error});
            });

            axios.interceptors.request.use(req => {
                //console.log("error = " + this.state.error);
                this.setState({error: null});
                return req;
            });
        }
        componentWillUnmount = () => {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            const modal = this.state.error ? this.state.error.message : null;
            
            return(
                <Aux>
                    <Modal show={this.state.error}
                        hide={this.errorConfirmedHandler}>
                        {modal}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;