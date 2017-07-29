import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import './style/sidebarstyle.css';
import DataComponent from './data.component.js'
import { Link } from 'react-router-dom';
import {Clearfix,Grid,Col,Row,Tabs, Tab, TabContainer, TabContent, TabPane, NavItem ,Nav,Glyphicon} from 'react-bootstrap';




var MenuWrap = React.createClass({

    getInitialState() {
        return {hidden : false};
    },

    toggle() {
        this.setState({hidden: !this.state.hidden});
    },

    render() {

        let style;

        if (this.state.hidden) {
            style = {display: 'none'};
        }

        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
});

class rootData extends Component {



    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'stack',
            side: 'left',
            hidden: true,
            name: 'data1'
        };
    };
    setname(value){
      this.setState({ name : value});

    }

    render() {
        const Menu = BurgerMenu[this.state.currentMenu];
        var styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                left: '20px',
                top: '60px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenu: {
                background: '#373a47',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        };


        return (
            <MenuWrap wait={20}>

                <Menu
                    styles={styles}
                    noOverlay id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                >
                <a key="1" onClick={()=>this.setname("data1")}><Link to="/data"className="acolor">DATA1</Link></a>
                <a key="2" onClick={()=>this.setname("data2")}><Link to="/data"className="acolor">DATA2</Link></a>
                <a key="3" href=""><span className="acolor">Study</span></a>
                <a key="4" href=""><span className="acolor">Collections</span></a>
                <a key="5" href=""><span className="acolor">Credits</span></a>
                <a key="6" href=""><span className="acolor">Data Management</span></a>
                <a key="7" href=""><span className="acolor">Location</span></a>
                <a key="8" href=""><span className="acolor">Study</span></a>
                <a key="9" href=""><span className="acolor">Collections</span></a>
                <a key="10" href=""><span className="acolor">Credits</span></a>

                </Menu>
                <div>
                <Grid>
                  <Row className="show-grid">
                      <Col className = "tablelayout"visibleLg lg={12} xs={12} >
                        <DataComponent name={this.state.name}/>
                      </Col>
                  </Row>
                </Grid>
                </div>

            </MenuWrap>

          //  {this.props.children}

        );
    }
};
export default rootData;
