import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';
class App extends Component {



  render() {
    return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <div className="App-intro">
           <Link to="/">HOME</Link>{' '}
           <Link to="/a">AAAA</Link> {' '}
           <Link to="/data">Data</Link> {' '}
           <Link to="/real">Real</Link>
           {this.props.children}
         </div>
       </div>
     );

  }
}



export default App;
