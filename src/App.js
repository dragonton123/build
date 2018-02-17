import React, { Component } from 'react';
import logo from './image/Piankusol_1.svg';
import { NavItem ,Nav,Navbar,NavDropdown,MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import {Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';
import './style/navbarstyle.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const logo_web = (
    <div className="logo" ><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></div>
);

const navbarInstance = (
    <Navbar className="" fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                {logo_web}
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
            <Nav pullRight>
                {/*<NavItem eventKey={1} ><Link className="ared" to="/">หน้าแรก</Link></NavItem>*/}
                <NavItem eventKey={2} ><Link className="ared" to="/real">ค่าเซนเซอร์</Link></NavItem>
                <NavDropdown eventKey={3}  title="เรียกดูสถิติ" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}  ><Link className="dropdown" to={{pathname: "/data",  param : "table"}}>ตาราง</Link></MenuItem>
                    <MenuItem eventKey={3.2}  ><Link className="dropdown" to={{pathname: "/data",  param : "chart"}}>กราฟ</Link></MenuItem>
                </NavDropdown>
                <NavItem eventKey={4} ><Link className="ared" to="/status">สถานะเซนเซอร์</Link></NavItem>
                <NavItem eventKey={4} ><Link className="ared" to="/control">ควบคุมการจ่ายน้ำ</Link></NavItem>
                {/*<NavItem eventKey={5} ><Link className="ared"  to="/real">ติดต่อเรา</Link></NavItem>*/}
                <NavItem eventKey={6} onClick={() => Logout()} ><span className="ared" >ออกจากระบบ</span></NavItem>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
);
const navbarInstance_admin = (
    <Navbar className="" fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                {logo_web}
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                {/*<NavItem eventKey={1} ><Link className="ared" to="/">หน้าแรก</Link></NavItem>*/}
                <NavItem eventKey={2} ><Link className="ared" to="/real">ค่าเซนเซอร์</Link></NavItem>
                <NavDropdown eventKey={3}  title="เรียกดูสถิติ" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}  ><Link className="dropdown" to={{pathname: "/data",  param : "table"}}>ตาราง</Link></MenuItem>
                    <MenuItem eventKey={3.2}  ><Link className="dropdown" to={{pathname: "/data",  param : "chart"}}>กราฟ</Link></MenuItem>
                </NavDropdown>
                <NavItem eventKey={4} ><Link className="ared" to="/status">สถานะเซนเซอร์</Link></NavItem>
                <NavItem eventKey={4} ><Link className="ared" to="/control">ควบคุมการจ่ายน้ำ</Link></NavItem>
                <NavItem eventKey={5} ><Link className="ared"  to="/admin">ผู้ดูแลระบบ</Link></NavItem>
                <NavItem eventKey={6} onClick={() => Logout()} ><span className="ared" >ออกจากระบบ</span></NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
const Footer = (
    <footer className="footer">
        <Grid>
            <Row>
                <Clearfix visibleXsBlock={true}>
                    <Col lg={6}>
                        <p className="App-line_button" >
                            <a href="https://line.me/R/ti/p/%40ybn0559o">
                                <img height="36" border="0" alt="เพิ่มเพื่อน" src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png"/>
                            </a>
                        </p>
                    </Col>
                </Clearfix>
                <Clearfix visibleLgBlock={true}>
                    <Col lg={6}>
                        <p className="App-line_QRcode" >
                            <br/>
                            เพิ่มเพื่อนเพื่อรับการแจ้งเตือนผ่าน Line Application
                        </p>
                    </Col>
                    <Col lg={6}>
                        <img  className="App-line_QRcode" src="http://qr-official.line.me/L/MJB1N06S4v.png"/>
                    </Col>
                </Clearfix>
            </Row>
        </Grid>
    </footer>
);

const button = (
    <div>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        &nbsp;&nbsp;
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    </div>
);

function Logout() {
    window.localStorage.removeItem("session");
    window.location.reload();
}


class App extends Component {


    showSettings (event) {
     event.preventDefault();

   }

  render() {
        let navbar
      if(this.props.user.datauser.type === "admin"){
          navbar = navbarInstance_admin
      }else{
          navbar = navbarInstance
      }

    return (
       <div className="App">
             <div >
                {navbar}
             </div>
            <div className="App-body" >
                <div  id="page-wrap">
                    {this.props.children}
                </div>
            </div>
               <div>
                   {Footer}
               </div>
       </div>
     );

  }
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{

    };
};



//export default withRouter(connect(mapStateToProps, mapDispatchToprops)(LoginComponent));
export default withRouter(connect(mapStateToProps, mapDispatchToprops)(App));
