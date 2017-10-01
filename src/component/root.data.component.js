import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import './style/sidebarstyle.css';
import DataComponent from './data.component.js'
import ChartComponent from './chart.component'
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
            name: 'esp_ss_1',
            show_name:'SENSOR 1',
            type: 'chart'
        };
    };
    setname(value,sh_name){
      this.setState({     name : value,
                      show_name: sh_name
                    });

    }
    settype(type){
        this.setState({type: type})
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
        let show;
        if(this.state.type === "chart"){
            show = <ChartComponent name={this.state.name} show_name={this.state.show_name}/>

        }else if(this.state.type === "table"){
            show = <DataComponent name={this.state.name} show_name={this.state.show_name}/>

        }


        return (
            <MenuWrap wait={20}>

                <Menu
                    styles={styles}
                    noOverlay id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                >
                <a key="1" onClick={()=>this.setname("esp_ss_1","SENSOR 1")}><Link to="/data"className="acolor">SENSOR 1</Link></a>
                <a key="2" onClick={()=>this.setname("esp_ss_2","SENSOR 2")}><Link to="/data"className="acolor">SENSOR 2</Link></a>
                <a key="3" onClick={()=>this.setname("esp_ss_3","SENSOR 3")}><Link to="/data"className="acolor">SENSOR 3</Link></a>
                <a key="4" onClick={()=>this.setname("esp_ss_4","SENSOR 4")}><Link to="/data"className="acolor">SENSOR 4</Link></a>
                <a key="5" onClick={()=>this.setname("esp_ss_5","SENSOR 5")}><Link to="/data"className="acolor">SENSOR 5</Link></a>
                <a key="6" onClick={()=>this.setname("esp_ss_6","SENSOR 6")}><Link to="/data"className="acolor">SENSOR 6</Link></a>
                <a key="7" onClick={()=>this.setname("esp_ss_7","SENSOR 7")}><Link to="/data"className="acolor">SENSOR 7</Link></a>
               </Menu>
                <div>
                 <Grid>
                     <Row className="show-grid">

                         <Col className = "tablelayout"visibleLg lg={12} xs={12} >
                             <button onClick={()=>this.settype('chart')}>กราฟ</button>
                             <button onClick={()=>this.settype('table')}>ตาราง</button>
                         </Col>
                     </Row>
                     <Row className="show-grid">
                         <Col className = "tablelayout"visibleLg lg={12} xs={12} >
                             {show}
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
