import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import './style/sidebarstyle.css';
import DataComponent from './data.component.js'
import ChartComponent from './chart.component'
import { Link } from 'react-router-dom';
import {Clearfix,Grid,Col,Row,Tabs, Tab, TabContainer, TabContent, TabPane, NavItem ,Nav,Glyphicon} from 'react-bootstrap';




//const location = this.props.location;
//const params = this.props.match.params;


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
            show_name:'เซนเซอร์ 1',
            show_name_en:'SENSOR 1',
            type: 'chart'
        };
    };
    setname(value,sh_name,sh_name_en){
      this.setState({       name : value,
                        show_name: sh_name,
                     show_name_en: sh_name_en,
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
                width: '24px',
                marginRight: '150px'
            },
            bmCross: {
                background: '#bdc3c7',
            },
            bmMenu: {
                background: '#373a47',
                padding: '2.5em 0',
                fontSize: '1.15em',
                width:'150px'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                //padding: '0.8em'

            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        };
        var type = this.props.location.param;
        if((type !== undefined)){
            if(this.props.location.param !== this.state.type){
                var type = this.props.location.param;
                this.setState({
                    type:type
                });
            }
        }
        let show;

        if(this.state.type === "chart"){
            show = <ChartComponent name={this.state.name} show_name={this.state.show_name} show_name_en={this.state.show_name_en}/>

        }else if(this.state.type === "table"){
            show = <DataComponent name={this.state.name} show_name={this.state.show_name} show_name_en={this.state.show_name_en}/>

        }
        return (
            <MenuWrap wait={20}>

                <Menu
                    styles={styles}
                    noOverlay id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                >
                <a key="1" onClick={()=>this.setname("esp_ss_1","เซนเซอร์ 1","SENSOR 1")}><Link to="/data"className="acolor">เซนเซอร์ 1</Link></a>
                <a key="2" onClick={()=>this.setname("esp_ss_2","เซนเซอร์ 2","SENSOR 2")}><Link to="/data"className="acolor">เซนเซอร์ 2</Link></a>
                <a key="3" onClick={()=>this.setname("esp_ss_3","เซนเซอร์ 3","SENSOR 3")}><Link to="/data"className="acolor">เซนเซอร์ 3</Link></a>
                <a key="4" onClick={()=>this.setname("esp_ss_4","เซนเซอร์ 4","SENSOR 4")}><Link to="/data"className="acolor">เซนเซอร์ 4</Link></a>
                <a key="5" onClick={()=>this.setname("esp_ss_5","เซนเซอร์ 5","SENSOR 5")}><Link to="/data"className="acolor">เซนเซอร์ 5</Link></a>
                <a key="6" onClick={()=>this.setname("esp_ss_6","เซนเซอร์ 6","SENSOR 6")}><Link to="/data"className="acolor">เซนเซอร์ 6</Link></a>
                <a key="7" onClick={()=>this.setname("esp_ss_7","เซนเซอร์ 7","SENSOR 7")}><Link to="/data"className="acolor">เซนเซอร์ 7</Link></a>
                <a key="8" onClick={()=>this.setname("esp_ss_8","เซนเซอร์ 8","SENSOR 8")}><Link to="/data"className="acolor">เซนเซอร์ 8</Link></a>
               </Menu>
                <div>
                 <Grid>
                     <Row className="show-grid">
                         <Col className = "tablelayout"visibleLg lg={12} xs={12} >
                             {show}
                          </Col>
                     </Row>
                </Grid>
                </div>
            </MenuWrap>
        );
    }
};
export default rootData;
