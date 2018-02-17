
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import './style/statusstyle.css';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';
import Switch from './style/react-toggle-switch'
import "./style/toggle-style.css"
import moment from 'moment';
const url = localStorage.getItem("url");

const button = (
    <div>
        <Button bsStyle="primary" bsSize="large" active onClick={()=>this.command("esp_rl_1","on")}>Primary button</Button>
        &nbsp;&nbsp;
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    </div>
);
const user_manual = (
    <Row sm={12} lg={12} >
        <Row>
            <div className="name_value_status">สถานะของวาล์วจ่ายน้ำ</div>
        </Row>
        <br/>
        <Row className="manual_control_style" >

            <Row lg={12}>
                <Col lg={4}>
                    <div ><span className="offline"/>  : วาล์วจ่ายน้ำปิดอยู่</div>
                </Col>
                <Col lg={4}>
                    <div ><span className="online"/>  : วาล์วจ่ายน้ำกำลังเปิด</div>
                </Col>
                <Col lg={4} >
                    <div ><span className="status_auto"/>  : วาล์วจ่ายน้ำอยู่ในโหมดออโต้</div>
                </Col>
            </Row>

        </Row>
    </Row>
);

class ControlComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            data: '',
            loading: true,
            tbname: '',
            sh_name: 'วาล์วจ่ายน้ำ',
            switched: false,
            switched_trig:false


        };
    }

    command(name,command,sh_name,status,active){
        if(active === "3"){
            alert(sh_name + " ไม่เชื่อมต่อ")
        }
        else if(this.state.switched === true){
            alert("ไม่สามารถทำงานได้ กรุณาปิดระบบอัตโนมัติก่อน");
        }
        else if(status === command) {
            if (status === "on") {
                alert(sh_name + " ถูกเปิดอยู่");
            }
            else if (status === "off") {
                alert(sh_name + " ถูกปิดอยู่");
            }
        }
        else if(status !== command){
            axios.get(url + '/command', {
                params: {
                    name: name,
                    command: command,
                    sh_name:sh_name
                }
            }).then(res => {
                console.log(res.data.status);
                if (command === "on") {
                    if (res.data.status === "sucess") {
                        alert("เปิด"+sh_name+"สำเร็จ");
                        var day = moment().format('DD/MM/YYYY');
                        var time = moment().format('HH:mm:ss');
                        var message = day+" เวลา "+time+" : เปิด"+sh_name+"สำเร็จ";
                        axios.get('https://linebotwww.herokuapp.com/send_nortify.php', {
                            params: {
                                msg: message
                            }
                        })
                    } else {
                        alert("ไม่สามารถเปิดการจ่ายน้ำได้");
                    }

                } else if (command === "off") {
                    if (res.data.status === "sucess") {
                        alert("ปิด"+sh_name+"สำเร็จ");
                        var day = moment().format('DD/MM/YYYY');
                        var time = moment().format('HH:mm:ss');
                        var message = day+" เวลา "+time+" : ปิด"+sh_name+"สำเร็จ";
                        axios.get('https://linebotwww.herokuapp.com/send_nortify.php', {
                            params: {
                                msg: message
                            }
                        })
                    } else {
                        alert("ไม่สามารถปิดการจ่ายน้ำได้");
                    }

                } else {

                }
            })
                .catch(err => {
                    alert("ไม่สามารถเปิดการจ่ายน้ำได้");
                });
            this.props.setStatus();
        }
 }


 btn1(command,value){
     if(value === "3")
        {
            if(command === "on"){
                return "buttonactive_offline"
            }else{
                return "button_offline"
            }

        }
     else{
         if(command === "on"){
             return "buttonactive"
         }else{
             return "button"
         }
     }

 }
 btn2(command,value){
     if(value === "3")
     {
         if(command === "off"){
             return "buttonactive_offline"
         }else{
             return "button_offline"
         }

     }
     else{
         if(command === "off"){
             return "buttonactive"
         }else{
             return "button"
         }
     }
 }

    btn_togggle(status){
        if(status === "auto"){
            //return true;
            this.setState({switched: true});

        }else{
            this.setState({switched: false});

        }
    }



    toggleSwitch(command){
        if(command === true){
            axios.get(url + '/command_auto', {
                params: {
                    command: "manual"
                }
            }).then(res => {
                console.log(res.data.status);

                    if (res.data.status === "sucess") {
                        alert("ปิดระบบจ่ายน้ำอัตโนมัติสำเร็จ");
                        var day = moment().format('DD/MM/YYYY');
                        var time = moment().format('HH:mm:ss');
                        var message = day+" เวลา "+time+" : ปิดระบบจ่ายน้ำอัตโนมัติสำเร็จ";
                        axios.get('https://linebotwww.herokuapp.com/send_nortify.php', {
                            params: {
                                msg: message
                            }
                        })
                        // this.setState({switched: false});
                    } else {
                        alert("ไม่สามารถปิดระบบจ่ายน้ำอัตโนมัติได้");
                    }

            })
                .catch(err => {
                    alert("ไม่สามารถปิดระบบจ่ายน้ำอัตโนมัติได้");
                });
            this.props.setStatus();
        }else if(command === false){
            axios.get(url + '/command_auto', {
                params: {
                    command: "auto"
                }
            }).then(res => {
                console.log(res.data.status);

                if (res.data.status === "sucess") {
                    alert("เปิดระบบจ่ายน้ำอัตโนมัติสำเร็จ");
                    var day = moment().format('DD/MM/YYYY');
                    var time = moment().format('HH:mm:ss');
                    var message = +day+" เวลา "+time+" : เปิดระบบจ่ายน้ำอัตโนมัติสำเร็จ **หากเปิดระบบจ่ายน้ำอัตโนมัติ จะไม่สามารถควบคุมการจ่ายน้ำด้วยตนเองได้** ";
                    axios.get('https://linebotwww.herokuapp.com/send_nortify.php', {
                        params: {
                            msg: message
                        }
                    })

                    // this.setState({switched: true});
                } else {
                    alert("ไม่สามารถเปิดระบบจ่ายน้ำอัตโนมัติได้");
                }

            })
                .catch(err => {
                    alert("ไม่สามารถเปิดระบบจ่ายน้ำอัตโนมัติได้");
                });
            this.props.setStatus();
        }

    };
    setstatusrelay(value) {
        if (value === "1") {
            return (<span className="online"/>);
        } else if (value === "0") {
            return (<span className="offline"/>);
        } else if (value === "2") {
            return (<span className="status_auto"/>);
        }
        else{
            return (<span className="offline"/>);
        }
    }
    setstatusrelaycircle(value) {
        console.log("round"+value);
        if (value === "0" || value === "1" || value === "2") {
            return "circle_online";
        }
        else{
            return "circle_offline";
        }
    }



    componentDidMount(){

        this.props.setStatus()
        this.props.setRealStatus()
        this.btn_togggle(this.props.command.resultcommand.status1)
        setInterval(()=>{
            this.props.setStatus()
            this.btn_togggle(this.props.command.resultcommand.status1)
            this.props.setRealStatus()
        },10000);
        setInterval(()=>{
            this.btn_togggle(this.props.command.resultcommand.status1)
        },1000);
        // setInterval(()=>{
        //     this.props.setRealStatus()
        // },10000);


        setInterval(()=>{
            //this.props.setData(this.state.tbname)
        },60000);
    }

  render() {


    return (

      <div>
        <Grid>
              <Row sm={12} lg={12}>
                  <div className="header">ควบคุมการจ่ายน้ำ</div>
              </Row >
              <br/>
              <Row lg={12}  >
                  <Row>
                      <Col lg={6} >
                          <Row  >

                              <Col lg={6} >
                                  <div className="auto_command">เปิดการจ่ายน้ำอัตโนมัติ
                                  </div>&nbsp;&nbsp;
                              </Col>
                              <Col lg={1}>
                                  <Switch onClick={()=>this.toggleSwitch(this.state.switched)} on={this.state.switched}/>
                              </Col>

                          </Row>
                      </Col>


                  </Row>
                  <br/>
                  <Row>
                      <Col lg={6} >
                          <div className={this.setstatusrelaycircle(this.props.status.results.esp_rl_1)}>
                              <div className="name">{this.state.sh_name} 1 &nbsp;{this.setstatusrelay(this.props.status.results.esp_rl_1)}</div><br/><br/>
                              <div>
                                  <button onClick={()=>this.command("esp_rl_1",
                                      "on",
                                      this.state.sh_name+" 1 ",
                                      this.props.command.resultcommand.command1,
                                      this.props.status.results.esp_rl_1)}
                                          className={this.btn1(this.props.command.resultcommand.command1,
                                              this.props.status.results.esp_rl_1)}>เปิดการจ่ายน้ำ</button>
                                  &nbsp;&nbsp;
                                  <button onClick={()=>this.command("esp_rl_1",
                                      "off",
                                      this.state.sh_name+" 1 ",
                                      this.props.command.resultcommand.command1,
                                      this.props.status.results.esp_rl_1)}
                                          className={this.btn2(this.props.command.resultcommand.command1
                                              ,this.props.status.results.esp_rl_1)}>ปิดการจ่ายน้ำ</button>
                              </div>

                          </div>
                      </Col>
                      <Col lg={6} >
                          <div className={this.setstatusrelaycircle(this.props.status.results.esp_rl_2)}>
                              <div className="name">{this.state.sh_name} 2 &nbsp;{this.setstatusrelay(this.props.status.results.esp_rl_2)}</div><br/><br/>
                              <div>
                                  <button onClick={()=>this.command("esp_rl_2",
                                      "on",
                                      this.state.sh_name+" 2 ",
                                      this.props.command.resultcommand.command2,
                                      this.props.status.results.esp_rl_2)}
                                              className={this.btn1(this.props.command.resultcommand.command2,
                                                  this.props.status.results.esp_rl_2)}>เปิดการจ่ายน้ำ</button>
                                  &nbsp;&nbsp;
                                  <button onClick={()=>this.command("esp_rl_2",
                                      "off",
                                      this.state.sh_name+" 2 ",
                                      this.props.command.resultcommand.command2,
                                      this.props.status.results.esp_rl_2)}
                                              className={this.btn2(this.props.command.resultcommand.command2,
                                                  this.props.status.results.esp_rl_2)}>ปิดการจ่ายน้ำ</button>
                              </div>

                          </div>
                      </Col>
                  </Row>
              <br/>
                  <Row lg={12}>
                      <Col lg={6} >
                          <div className={this.setstatusrelaycircle(this.props.status.results.esp_rl_3)}>
                              <div className="name">{this.state.sh_name} 3 &nbsp;{this.setstatusrelay(this.props.status.results.esp_rl_3)}</div><br/><br/>
                              <div>
                                  <button onClick={()=>this.command("esp_rl_3",
                                      "on",
                                      this.state.sh_name+" 3 ",
                                      this.props.command.resultcommand.command3,
                                      this.props.status.results.esp_rl_3)}
                                                      className={this.btn1(this.props.command.resultcommand.command3,
                                                          this.props.status.results.esp_rl_3)}>เปิดการจ่ายน้ำ</button>
                                  &nbsp;&nbsp;
                                  <button onClick={()=>this.command("esp_rl_3",
                                      "off",
                                      this.state.sh_name+" 3 ",
                                      this.props.command.resultcommand.command3,
                                      this.props.status.results.esp_rl_3)}
                                                      className={this.btn2(this.props.command.resultcommand.command3,
                                                          this.props.status.results.esp_rl_3)}>ปิดการจ่ายน้ำ</button>
                              </div>

                          </div>
                      </Col>
                      <Col lg={6} >
                          <div className={this.setstatusrelaycircle(this.props.status.results.esp_rl_4)}>
                              <div className="name">{this.state.sh_name} 4 &nbsp;{this.setstatusrelay(this.props.status.results.esp_rl_4)}</div><br/><br/>
                              <div>
                                  <button onClick={()=>this.command("esp_rl_4",
                                      "on",
                                      this.state.sh_name+" 4 ",
                                      this.props.command.resultcommand.command4,
                                      this.props.status.results.esp_rl_4)}
                                                      className={this.btn1(this.props.command.resultcommand.command4,
                                                          this.props.status.results.esp_rl_4)}>เปิดการจ่ายน้ำ</button>
                                  &nbsp;&nbsp;
                                  <button onClick={()=>this.command("esp_rl_4",
                                      "off",
                                      this.state.sh_name+" 4 ",
                                      this.props.command.resultcommand.command4,
                                      this.props.status.results.esp_rl_4)}
                                                      className={this.btn2(this.props.command.resultcommand.command4,
                                                          this.props.status.results.esp_rl_4)}>ปิดการจ่ายน้ำ</button>
                              </div>

                          </div>
                      </Col>
                  </Row>
                  <br/>
                  {user_manual}


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
        status: state.status,
        command: state.command
    };
};
const mapDispatchToprops = (dispatch) =>{
    return{
        setStatus: () =>{
            dispatch({
                type: "FETCH_COMMAND",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get(url+'/realtime_command')
                            .then(res => {
                                console.log(res.data);
                                return res.data })
                            .catch(err => { throw err; }));
                    },500);
                })
            });

        },
        setRealStatus: () =>{
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

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(ControlComponent));

