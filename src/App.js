import React, { Component } from 'react';
import logo from './image/piangkusol_logo.png';
import {Clearfix,Grid,Col,Row,Tabs, Tab, TabContainer, TabContent, TabPane, NavItem ,Nav,NavDropdown,Navbar,MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import DataComponent from './component/data.component.js'
import './App.css';
//import './style/Navstyle.css'
import './style/navbarstyle.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import Demo from './component/Demo.component.js'

const navbarInstance = (
  <Navbar className="" fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <div className="logo"><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></div>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>

    <Nav pullRight>
      <NavItem eventKey={1} ><Link className="ared" to="/">HOME</Link></NavItem>
      <NavItem eventKey={2} ><Link to="/a">ANOTHER</Link></NavItem>
      <NavItem eventKey={3} ><Link to="/data">DATA</Link></NavItem>
      <NavItem eventKey={4} ><span className="navItem"><Link to="/real">REAL</Link></span></NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);



class App extends Component {

  showSettings (event) {
     event.preventDefault();

   }

  render() {
    return (
       <div className="App">
       <div>
       </div>
         <div >
         {navbarInstance}
        </div>
        <div className="App-body" id="page-wrap">

           {this.props.children}

           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>
           asdasd<br/>

        </div>
       </div>
     );

  }
}



export default App;
