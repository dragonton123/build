import React, { Component } from 'react';
import logo from './image/FP logo.png';
import { NavItem ,Nav,Navbar} from 'react-bootstrap';
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
const eiei = (
    <div className="logo" ><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></div>
);
const navbarInstance = (
  <Navbar className="" fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
        {eiei}
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>

    <Nav pullRight>
      <NavItem eventKey={1} ><Link className="ared" to="/">หน้าแรก</Link></NavItem>
      <NavItem eventKey={2} ><Link className="ared" to="/a">เพิ่มอุปกรณ์</Link></NavItem>
      <NavItem eventKey={3} ><Link className="ared" to="/data">เรียกดูสถิติ</Link></NavItem>
      <NavItem eventKey={4} ><span className="navItem"><Link className="ared" to="/real">ค่าเซนเซอร์</Link></span></NavItem>
        <NavItem eventKey={5} ><span className="navItem"><Link className="ared"  to="/real">ติดต่อเรา</Link></span></NavItem>

        <NavItem eventKey={6} ><span className="navItem"><Link className="ared" to="/status">ออกจากระบบ</Link></span></NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

const button = (
    <div>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        &nbsp;&nbsp;
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    </div>
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
        <div className="App-body" >
         <div  id="page-wrap">

           {this.props.children}


           </div>
        </div>
       </div>
     );

  }
}



export default App;
