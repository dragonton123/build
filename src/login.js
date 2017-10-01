import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import './App.css';
import App from './App';
import LoginComponent from './component/login.component'
import './style/navbarstyle.css'
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import routers from './router';



const history = createHistory();
const middleware = routerMiddleware(history);



class Login extends Component {

constructor() {
    super();
    this.state = {
        status_login : "0"
    }
}



    render() {
        let show ;
        if(this.props.user.datauser.status === "1"){
            show = <ConnectedRouter history={history} >
                    <App >{ routers }</App>
                    </ConnectedRouter> ;
        }else{
            show = <LoginComponent />;

        }

        return (
            <div>
                {show}
            </div>
    );

    }
}
 
const mapStateToProps = (state) => {
    return{
        user: state.user,
        math: state.math,
        data: state.db,
        realtimedata: state.real
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{

    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Login));

