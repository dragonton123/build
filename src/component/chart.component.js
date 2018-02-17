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
import './style/bootstrap-datetimepicker.css'
const ReactHighcharts = require('react-highcharts');
const url = localStorage.getItem("url");



class ChartComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            format: "YYYY/MM/DD",
            inputFormat: "DD/MM/YYYY",
            mode: "date",
            type: "d",
            tb:"esp_ss_1",
            sh_type:"รายวัน",
            sh_name:"เซนเซอร์ 1"
        }
    };

        componentDidMount(){
        console.log(this.props.chart.resultChart.xAxis.categories);
        console.log(this.props.chart.resultChart.series);
        this.props.setChart(this.props.name,this.props.date.date,this.props.date.ldate,this.state.sh_name)

    }

    onChange_date(newDate){

        if(newDate > moment().format('YYYY/MM/DD')){
            alert("วันที่เริ่มต้นไม่ถูกต้องกรุณาเลือกวันที่ใหม่");
            this.props.set_date(moment().format('YYYY/MM/DD'));
            this.props.set_ldate(moment().format('YYYY/MM/DD'));

        }else{
            this.props.setChart(this.state.tb,newDate,newDate,this.state.sh_name)
            this.props.set_date(newDate);
            this.props.set_ldate(newDate);

        }
    }
    onChange_ldate(newDate){

        if((newDate > moment().format('YYYY/MM/DD'))||(newDate < this.props.date.date)){
            alert("วันที่สิ้นสุดไม่ถูกต้องกรุณาเลือกวันที่ใหม่");
            this.props.set_ldate(moment().format('YYYY/MM/DD'));
        }else{
            this.props.setChart(this.state.tb,this.props.date.date,newDate,this.state.sh_name)
            this.props.set_ldate(newDate);

        }
    }
    set_chart(type,sh_type){

        this.props.setChart(this.state.tb,this.state.date,type,this.state.sh_name)
        this.setState({type:type,
                        sh_type:sh_type});

    }
    save_chart_pdf(chart){
            console.log(chart);
            var data = {
                options: chart,
                filename: "Chart",
                type: 'application/pdf',
                async: true,
                width: 2000

            };

            var exportUrl = 'http://export.highcharts.com/';
            axios.post(exportUrl, data,)
            .then(res => {
                var img_url = exportUrl + res.data;
                console.log(res.data);
                var link = document.createElement("a");

                link.href = img_url;
                link.download = "pic01.pdf";
                //set the visibility hidden so it will not effect on your web-layout
                link.style = "visibility:hidden";
                //this part will append the anchor tag and remove it after automatic click
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                })
            .catch(err => { throw err; })
    }
    save_chart_img(chart){
        console.log(chart);
        var data = {
            options: chart,
            filename: "Chart",
            type: 'image/png',
            async: true,
            width: 2000

        };

        var exportUrl = 'http://export.highcharts.com/';
        axios.post(exportUrl, data,)
            .then(res => {
                var img_url = exportUrl + res.data;
                console.log(res.data);
                var link = document.createElement("a");

                link.href = img_url;
                link.download = "pic01.png";
                //set the visibility hidden so it will not effect on your web-layout
                link.style = "visibility:hidden";
                //this part will append the anchor tag and remove it after automatic click
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            })
            .catch(err => { throw err; })
    }

    render() {
        if((this.props.name !== this.state.tb)&&(this.props.show_name !== this.state.sh_name)){
            var tablename = this.props.name;
            this.props.setChart(tablename,this.props.date.date,this.props.date.ldate,showname)
            this.setState({
                tb :tablename,
                sh_name :showname
            });
        }else if(this.props.name !== this.state.tb){
                var tablename = this.props.name;
                this.props.setChart(tablename,this.props.date.date,this.props.date.ldate,this.state.sh_name)
                this.setState({
                    tb :tablename
            });

        }else if(this.props.show_name !== this.state.sh_name){
            var showname = this.props.show_name;
            this.props.setChart(this.state.tb,this.props.date.date,this.props.date.ldate,showname)
            this.setState({
                sh_name :showname
            });
        }else{

        }



        var config = {
            title: {
                text: 'ค่าความชื้นในดินของ'+this.props.chart.resultChart.series.name
            },
            yAxis : {
                title: {
                    text: 'Soil moisture (%)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
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
                       <br/>
                       <Row className="chartcircle">
                           <Row className="show-grid">
                                   <div className="header2">ชื่อเซ็นเซอร์ : {this.props.chart.resultChart.series.name}</div>
                                   <div className="header2">เลือกวันที่ของกราฟ</div>
                           </Row >
                           <Row>
                               <Col sm={12} lg={4} >
                                       <DateTimeField

                                           dateTime={this.props.date.date}
                                           format={this.state.format}
                                           viewMode={this.state.mode}
                                           inputFormat={this.state.inputFormat}
                                           defaultText={this.props.date.date}
                                           showToday={true}
                                           onChange={this.onChange_date.bind(this)}
                                       />
                               </Col>
                               <Col sm={12} lg={4}>

                                   <DateTimeField
                                       dateTime={this.props.date.ldate}
                                       format={this.state.format}
                                       viewMode={this.state.mode}
                                       inputFormat={this.state.inputFormat}
                                       defaultText={this.props.date.ldate}
                                       onChange={this.onChange_ldate.bind(this)}
                                   />

                               </Col>

                           </Row >
                           <br/>
                           <Row className="show-grid">
                               <Col sm={12} lg={4}>
                                   <div>วันที่เริ่มต้น : {this.props.date.date}</div>
                               </Col>
                               <Col sm={12} lg={4}>
                                   <div>วันที่สิ้นสุด : {this.props.date.ldate}</div>
                               </Col>
                               <Row className="show-grid">
                                   <button onClick={()=>this.save_chart_pdf(config)} className="button-save" >
                                       <span className="glyphicon glyphicon-file" aria-hidden="true"/>  Save as PDF
                                   </button>
                                   <button onClick={()=>this.save_chart_img(config)} className="button-save" >
                                       <span className="glyphicon glyphicon-picture" aria-hidden="true"/>  Save as Image
                                   </button>
                               </Row >
                           </Row >
                       </Row>
                       <br/>
                       <Row className="chartcircle">
                           <Row className="show-grid">
                               <Col sm={12} lg={12}>
                                   <ReactHighcharts config = {config} />
                               </Col>
                           </Row >
                       </Row>
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
        date: state.date,
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
                        resolve(axios.get(url+'/data', {
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

        setChart : (name,date,ldate,sh_name) =>{
            dispatch({
                type: "FETCH_CHART",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get(url+'/chart', {
                            params: {
                                name: name,
                                date: date,
                                ldate: ldate,
                                sh_name: sh_name
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

        set_date : (date) =>{
            dispatch({
                type: "SET_DATE",
                payload : date
            });
        },
        set_ldate : (date) =>{
            dispatch({
                type: "SET_LDATE",
                payload : date
            });
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(ChartComponent));
