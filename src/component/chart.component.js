import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';
import moment from 'moment';
import { form, FieldGroup,ControlLabel,FormControl  } from 'react-bootstrap';
import {FormGroup, HelpBlock} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import './style/maincomponentstyle.css'
import './style/chartstyle.css'
//var RadarChart = require("react-chartjs-2").Radar;

const ReactHighcharts = require('react-highcharts');




class ChartComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment().format('YYYY/MM/DD'),
            format: "YYYY/MM/DD",
            inputFormat: "DD-MM-YYYY",
            mode: "date",
            type: "d",
            tb:"esp_ss_1",
            sh_type:"รายวัน"

        }
    };

        componentDidMount(){
        console.log(this.props.chart.resultChart.xAxis.categories);
        console.log(this.props.chart.resultChart.series);
        this.props.setChart(this.props.name,this.state.date,this.state.type)

    }

    onChange(newDate){
        this.props.setChart(this.state.tb,newDate,this.state.type)
        this.setState({date:newDate});
    }
    set_chart(type,sh_type){

        this.props.setChart(this.state.tb,this.state.date,type)
        this.setState({type:type,
                        sh_type:sh_type});

    }

    render() {
        if(this.props.name !== this.state.tb){
            var tablename = this.props.name;
            this.props.setChart(tablename,this.state.date,this.state.type)
            this.setState({
                tb :tablename
            });
        }

        var config = {
            xAxis: {
                categories: this.props.chart.resultChart.xAxis.categories
            },
            series:[
                this.props.chart.resultChart.series
            ]
        };
        return (

           <div>
                   <Grid>
                       <Row sm={12} lg={12}>
                               <div className="header">กราฟแสดงค่าสถิติความชื้้น</div>
                       </Row >
                       <Row className="show-grid">
                           <Col sm={12} lg={12}>
                               <ControlLabel>เลือกวันที่และรูปแบบของกราฟ</ControlLabel>
                           </Col>
                       </Row >
                       <Row className="show-grid">
                           <Col sm={12} lg={6}>
                               <FormGroup>
                                   <DateTimeField
                                       dateTime={this.state.date}
                                       format={this.state.format}
                                       viewMode={this.state.mode}
                                       inputFormat={this.state.inputFormat}
                                       defaultText="Please select a date"
                                       onChange={this.onChange.bind(this)}
                                   />
                               </FormGroup>
                           </Col>
                           <Col sm={12} lg={3}>
                               <Col sm={12} lg={4}>
                                    <input type="submit" value="รายวัน" onClick={()=>this.set_chart("d","รายวัน")} className="btn btn-primary" />
                               </Col>
                               <Col sm={12} lg={4}>
                                    <input type="submit" value="รายสัปดาห์" onClick={()=>this.set_chart("w","รายสัปดาห์")} className="btn btn-primary" />
                               </Col>
                               <Col sm={12} lg={4}>
                                    <input type="submit" value="รายเดือน" onClick={()=>this.set_chart("m","รายเดือน")} className="btn btn-primary" />
                               </Col>
                           </Col>

                       </Row >
                       <Row className="show-grid">
                           <Col sm={12} lg={4}>
                               <div>ชื่อเซ็นเซอร์ : {this.props.show_name}</div>
                           </Col>
                           <Col sm={12} lg={4}>
                               <div>วันที่ : {this.state.date}</div>
                           </Col>
                           <Col sm={12} lg={4}>
                               <div>รูปแบบของกราฟ : {this.state.sh_type}</div>
                           </Col>
                       </Row >
                       <Row className="show-grid">



                           <Col sm={12} lg={12}><ReactHighcharts config = {config} /></Col>

                       </Row >
                   </Grid>
           </div>

            );
    }
}


const mapStateToProps = (state) => {
    return{
        user: state.user,
        math: state.math,
        data: state.db,
        chart : state.chart,
        realtimedata: state.real
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{
        setData : (value) =>{
            dispatch({
                type: "FETCH_DB",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get('https://petrological-separa.000webhostapp.com/api/data', {
                            params: {
                                name: value
                            }
                        })
                            .then(res => {
                                console.log(res.data);
                                return res.data })
                            .catch(err => { throw err; }));
                    },500);
                })
            });
        },

        setChart : (name,date,status) =>{
            dispatch({
                type: "FETCH_CHART",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get('https://petrological-separa.000webhostapp.com/api/chart', {
                            params: {
                                name: name,
                                date: date,
                                status: status
                            }
                        })
                            .then(res => {
                                console.log(res.data);
                                return res.data })
                            .catch(err => { throw err;}));
                    },500);
                })
            });
        },
        setChart_fake : () =>{
            dispatch({
                type: "FETCH_CHART",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get('https://petrological-separa.000webhostapp.com/api/chart', {
                            params: {
                                name: "esp_ss_7",
                                date: "2017/10/1",
                                status: "m"
                            }
                        })
                            .then(res => {
                                console.log(res.data);
                                return res.data })
                            .catch(err => { throw err; }));
                    },500);
                })
            });
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(ChartComponent));
