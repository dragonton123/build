import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import {ProgressBar,Clearfix,Grid,Col,Row,Tabs, Tab, TabContainer, TabContent, TabPane, NavItem ,Nav,Glyphicon} from 'react-bootstrap';
import './style/realtimedatastyle.css'
import './style/maincomponentstyle.css'
const url = localStorage.getItem("url");
class RealtimedataComponent extends Component{
  constructor() {
      super();
      this.state = {
       real:'',
       sp1 : <span className="off"/>,
       sa1 : <span className="off"/>,
       sh_name : "เซนเซอร์",
      };
    }

    setrealtimedata(value){
      if(value == "1"){

      return (<span className="on"/>);
      }else{
      return (<span className="off"/>);
      }
    }

    setstylebar(valuebar){
      if(valuebar <= 20){
          return ("danger");
      }else if(valuebar <= 65){
          return ("warning");
      }
      else if(valuebar <= 80){
          return ("success");
      }else{
          return ("info");
      }
    }
    fillter_data(data){
        if(data >= 100){
            return 100;
        }else{
            return data;
        }
    }

    componentDidMount(){
      this.props.setReal();
      // setInterval(()=>{
      //   this.setrealtimedata(this.props.realtimedata.resultreal.p_status)
      // },1000);

      setInterval(()=>{this.props.setReal()
      console.log("real");
      },10000);
    }

    render() {

        //this.setrealtimedata(this.props.realtimedata.resultreal.p_status)

        return (
            <div>
                <Grid>
                    <Row sm={12} lg={12}>
                        <div className="header">ค่าจากเซนเซอร์</div>
                    </Row >
                    <br/>
                    <Row lg={12}>
                        <Col lg={6} >
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 1</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data1)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data1))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data1)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data1)}%`}/></div>
                            </div>
                        </Col>
                        <Clearfix visibleXsBlock={true}>
                               <br/>
                        </Clearfix>
                        <Col lg={6} >
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 2</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data2)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data2))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data2)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data2)}%`}/></div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row lg={12}>
                        <Col lg={6} >
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 3</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data3)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data3))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data3)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data3)}%`}/></div>
                            </div>
                        </Col>
                        <Clearfix visibleXsBlock={true}>
                            <br/>
                        </Clearfix>
                        <Col lg={6} >
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 4</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data4)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data4))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data4)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data4)}%`}/></div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row lg={12}>
                        <Col lg={6}>
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 5</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data5)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data5))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data5)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data5)}%`}/></div>
                            </div>
                        </Col>
                        <Clearfix visibleXsBlock={true}>
                            <br/>
                        </Clearfix>
                        <Col lg={6}>
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 6</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data6)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data6))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data6)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data6)}%`}/></div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row lg={12}>
                        <Col lg={6} >
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 7</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data7)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data7))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data7)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data7)}%`}/></div>
                            </div>
                        </Col>
                        <Clearfix visibleXsBlock={true}>
                            <br/>
                        </Clearfix>
                        <Col lg={6} >
                            <div className="circle">
                                <div className="name">{this.state.sh_name} 8</div><br/>
                                <div className="name">ค่าความชื้นในดิน : {this.fillter_data(this.props.realtimedata.resultreal.data8)} %</div><br/>
                                <div className="bar"><ProgressBar
                                    bsStyle={this.setstylebar(this.fillter_data(this.props.realtimedata.resultreal.data8))}
                                    active now={this.fillter_data(this.props.realtimedata.resultreal.data8)}
                                    label={`${this.fillter_data(this.props.realtimedata.resultreal.data8)}%`}/></div>
                            </div>
                        </Col>
                    </Row>


                </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return{
      realtimedata: state.real
  };
};
const mapDispatchToprops = (dispatch) =>{
  return{
      setReal: () =>{
        dispatch({
          type: "FETCH_REAL",
          payload :new Promise((resolve,reject) => {
            setTimeout(()=>{
              resolve(axios.get(url+'/realtime')
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

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(RealtimedataComponent));
