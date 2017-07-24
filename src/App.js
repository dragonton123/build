import React, { Component } from 'react';
import logo from './image/piangkusol_logo.png';

import './App.css';
import './style/Navstyle.css'

import { Link } from 'react-router-dom';
class App extends Component {



  render() {
    return (
       <div className="App">
       <div className="App-header">
        <div className="logo"><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></div>
       </div>
         <div className="App-intro">
         <ul>
            <li><a><Link to="/real">Real</Link></a></li>
            <li><a><Link to="/data">Data</Link></a></li>
            <li><a><Link to="/a">Another</Link></a></li>
            <li><a><Link to="/">HOME</Link></a></li>
         </ul>


           {this.props.children}
         </div>
       </div>
     );

  }
}



export default App;
