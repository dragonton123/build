
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import './style/statusstyle.css';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';

const url = localStorage.getItem("url");

const button = (
    <div>
        <Button bsStyle="primary" bsSize="large" active onClick={()=>this.command("esp_rl_1","on")}>Primary button</Button>
        &nbsp;&nbsp;
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    </div>
);

class StatusComponent extends React.Component {
 command(name,command){
     axios.get(url+'/command', {
         params: {
             name: name,
             command : command
         }
     }).then(res => {
         console.log(res.data.status);
         if(1){
             alert("เปิดการจ่ายน้ำสำเร็จ");
         }else{
             alert("ไม่สามารถเปิดการจ่ายน้ำได้");
         } })
         .catch(err => { throw err; alert("ไม่สามารถเปิดการจ่ายน้ำได้"); });
 }

    constructor() {
        super();
        this.state = {
            data: {
                running1 : '0',
                running2 : '',
                running3 : '',
                running4 : '',
                running5 : '',
                running6 : '',
                running7 : '',
                running8 : '',
            },
            loading: true,
            tbname: '',
            sh_name: 'เซนเซอร์'


        };
    }
    setdata() {
        var myArray = this.props.status.resultstatus;
        console.log(myArray);
        this.setState({
            data:myArray,
            loading: false,

        });

    }

    setstatus(st){

    }


    setrealtimedata(value) {
        if (value === '1') {
            return (<span className="ac1"/>);
        } else {
            return (<span className="ac2"/>);
        }
    }

    setstatusdata(value) {
        if (value === "stable") {

            return (<span className="online"/>);
        } else if (value === "unstable") {
            return (<span className="offline"/>);
        } else{
            return (<span className="offline"/>);
        }
    }

    componentDidMount(){

        this.props.setStatus();
        setTimeout(this.props.setStatus(),5000);

        setInterval(()=>{
            this.props.setStatus();
        console.log('state : '+this.props.status.resultstatus.running1);
        },60000);

        setInterval(()=>{
            //this.props.setData(this.state.tbname)
        },60000);
    }
  render() {


    return (

      <div>
        <Grid>
          <Row>
              <Row sm={12} lg={12}>

              </Row >
              <br/>
              <Row sm={12} lg={12} className="manualcircle">
                  <Row>
                    <div className="name">สถานะของเซนเซอร์</div>
                  </Row>
                  <br/>
                  <Row className="manual_style" >

                          <Row lg={12}>
                              <Col lg={6}>
                                  <div ><span className="online"/> <span className="ac1"/> : เซนเซอร์เชื่อมต่อ ส่งข้อมูลปกติ</div>
                              </Col>
                              <Col lg={6}>
                                  <div ><span className="online"/> <span className="ac2"/> : เซนเซอร์เชื่อมต่อ ไม่ส่งข้อมูล</div>
                              </Col>
                          </Row>
                          <Row lg={12}>
                              <Col lg={6} >
                                  <div ><span className="offline"/> <span className="ac1"/> : เซนเซอร์ไม่เชื่อมต่อ ส่งข้อมูลปกติ</div>
                              </Col>
                              <Col lg={6}>
                                  <div ><span className="offline"/> <span className="ac2"/> : เซนเซอร์ไม่เชื่อมต่อ ไม่ส่งข้อมูล</div>
                              </Col>
                          </Row>

                  </Row>
              </Row >
              <br/>
              <Row sm={12} lg={12} className="fbcircle">
                <div className="fb">

                    <Row>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={2} sm={2} lg={2}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 8 :
                                {this.setstatusdata(this.props.status.results.working8)}
                                {this.setrealtimedata(this.props.status.results.running8)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={2} sm={2} lg={2}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 7 :
                                {this.setstatusdata(this.props.status.results.working7)}
                                {this.setrealtimedata(this.props.status.results.running7)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <br/>
                    </Row>
                      <Row>
                        <Col xs={2} sm={2} lg={2}/>
                        <Col xs={1} sm={1}lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 6 :
                                {this.setstatusdata(this.props.status.results.working6)}
                                {this.setrealtimedata(this.props.status.results.running6)}
                            </div>
                        </Col>
                      </Row>
                    <Row>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={2} sm={2} lg={2}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 5 :
                                {this.setstatusdata(this.props.status.results.working5)}
                                {this.setrealtimedata(this.props.status.results.running5)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <br/>

                    </Row>
                    <Row>
                        <Col xs={2} sm={2} lg={2}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 4 :
                                {this.setstatusdata(this.props.status.results.working4)}
                                {this.setrealtimedata(this.props.status.results.running4)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <br/>
                    </Row>
                    <Row>

                        <Col xs={2} sm={2} lg={2}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 3 :
                                {this.setstatusdata(this.props.status.results.working3)}
                                {this.setrealtimedata(this.props.status.results.running3)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} lg={3}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 2 :
                                {this.setstatusdata(this.props.status.results.working2)}
                                {this.setrealtimedata(this.props.status.results.running2)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                        <br/>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} lg={3}/>
                        <Col xs={1} sm={1} lg={1}>
                            <div className="sensor_bg">{this.state.sh_name} 1 :
                                {this.setstatusdata(this.props.status.results.working1)}
                                {this.setrealtimedata(this.props.status.results.running1)}
                            </div>
                        </Col>
                    </Row>

                </div>
              </Row>
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
        realtimedata: state.real,
        status: state.status
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{
        setStatus: () =>{
            dispatch({
                type: "FETCH_STATUS",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get(url+'/status')
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

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(StatusComponent));

