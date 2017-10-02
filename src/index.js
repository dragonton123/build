import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import promise from 'redux-promise-middleware';
import rootReducer from './reducer/index.js';
import * as jwtDecode from 'jwt-decode';
//import {promise} from 'react-promise';
/*
Router
*/

import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import routers from './router';

var session = localStorage.getItem("session")
console.log("SESSION : " + session);
if( session !== null){
   // var jwtDecode = require('jwt-decode');
    console.log("GG"+ session)
    var dec = jwtDecode(localStorage.getItem("session"));
}else{
    var dec = [];
}
console.log(dec);
const history = createHistory();
const middleware = routerMiddleware(history);

const myLogger = (store) => (next) => (action) =>{
  console.log("Logged Action: ",action);
  next(action);
}


const store = createStore(rootReducer,
                                  {},
                            applyMiddleware(
                              myLogger,
                              middleware,
                              promise()));

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(
  {
    type: "ADD",
    payload: 10
  }
)

store.dispatch(
  {
    type: "SUB",
    payload: 5
  }
)
store.dispatch(
    {
        type:"FETCH_DATAUSER",
        payload: dec
    }
)



// store.dispatch(
//   {
//     type: "FETCH_DB",
//     payload :new Promise((resolve,reject) => {
//       setTimeout(()=>{
//         resolve(axios.get('https://dyspathetic-februar.000webhostapp.com/apidb.php')
//           .then(res => {
//             console.log(res.data);
//             return res.data })
//           .catch(err => { throw err; }));
//       },500);
//     })
//   }
// )

store.dispatch(
  {
    type: "FETCH_REAL",
    payload :new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve(axios.get('https://petrological-separa.000webhostapp.com/apireal.php')
          .then(res => {
            console.log(res.data);
            return res.data })
          .catch(err => { throw err; }));
      },20000);
    })
  }
)


ReactDOM.render(

  <Provider store={store}>
  <ConnectedRouter history={history} >
    <Login >{ routers }</Login>
  </ConnectedRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
