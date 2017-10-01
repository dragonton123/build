
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import './style/statusstyle.css';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';


const button = (
    <div>
        <Button bsStyle="primary" bsSize="large" active onClick={()=>this.command("esp_rl_1","on")}>Primary button</Button>
        &nbsp;&nbsp;
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    </div>
);

class StatusComponent extends React.Component {
 command(name,command){
     axios.get('https://petrological-separa.000webhostapp.com/apicommand.php', {
         params: {
             name: name,
             command : command
         }
     });
 }

    constructor() {
        super();
        this.state = {
            data: '',
            loading: true,
            tbname: '',


        };
    }
    setdata() {
        var myArray = this.props.status.resultstatus;
        var realdata = this.props.realtimedata.resultreal;
        console.log(myArray);
        this.setState({
            data:myArray,
            real:realdata,
            loading: false
        });

    }

    setstatus(st){

    }


    setrealtimedata(value) {
        if (value === "1") {

            return (<span className="on"/>);
        } else {
            return (<span className="off"/>);
        }
    }

    setstatusdata(value) {
        if (value === "1") {

            return (<span className="ac1"/>);
        } else if (value === "0") {
            return (<span className="ac2"/>);
        } else{
            return(<span className="off"/>);
        }
    }

    componentDidMount(){

        this.props.setStatus()

        setInterval(()=>{
            this.props.setStatus()
            this.setdata()
        },10000);

        setInterval(()=>{
            //this.props.setData(this.state.tbname)
        },60000);
    }
  render() {


    return (

        <div>
            <div>
                <Button bsStyle="primary" bsSize="large" active onClick={()=>this.command("esp_rl_1","on")}>On button</Button>
                &nbsp;&nbsp;
                <Button bsStyle="primary" bsSize="large" active onClick={()=>this.command("esp_rl_1","off")}>Off button</Button>
            </div>

        <Grid>
          <Row>
            <Col lg={1}>
            <div className="fb">

                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>
                <Row>
                    <Col lg={4}/>
                    <Col lg={1}>
                        <Label bsStyle="default">{JSON.stringify(this.props.status.resultstatus.name1)}
                        {this.setrealtimedata(this.props.status.resultstatus.status1)}
                        {this.setstatusdata(this.props.status.resultstatus.status_data1)}</Label>
                    </Col>
                    <Col lg={4}/>
                    <Col lg={1}>
                        <Label bsStyle="default">{this.props.status.resultstatus.name2}
                        {this.setrealtimedata(this.props.status.resultstatus.status2)}
                        {this.setstatusdata(this.props.status.resultstatus.status_data2)}</Label>
                    </Col>
                </Row>
                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>
                  <Row>
                    <Col lg={1}/>
                    <Col lg={1}>
                        <Label bsStyle="default">{console.log(this.props.status.resultstatus)}</Label>
                        {/*{this.setrealtimedata(this.props.status.resultstatus.status3)}*/}
                        {/*{this.setstatusdata(this.props.status.resultstatus.status_data3)}</Label>*/}
                    </Col>
                    <Col lg={4}/>
                    <Col lg={1}>
                        <Label bsStyle="default">{this.props.status.resultstatus.name4}
                        {this.setrealtimedata(this.props.status.resultstatus.status4)}
                        {this.setstatusdata(this.props.status.resultstatus.status_data4)}</Label>
                    </Col>
                  </Row>

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
                        resolve(axios.get('https://petrological-separa.000webhostapp.com/api/status')
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

