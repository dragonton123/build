import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import HorizontalGauge from 'react-horizontal-gauge';
import {ProgressBar,Clearfix,Grid,Col,Row,Tabs, Tab, TabContainer, TabContent, TabPane, NavItem ,Nav,Glyphicon} from 'react-bootstrap';


class RealtimedataComponent extends Component{
  constructor() {
      super();
      this.state = {
       real:'',
       sa1 : <span className="off"></span>,
       sp1 : <span className="off"></span>,

      };
    }

    setrealtimedata(value){
      if(value == "1"){

      return (<span className="on"></span>);
      }else{
      return (<span className="off"></span>);
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

    componentDidMount(){
      this.props.setReal()
      setInterval(()=>{
        this.setrealtimedata(this.props.realtimedata.resultreal.p_status)
      },1000);

      setInterval(()=>{

        this.props.setReal()
      },60000);
    }

    render() {

        //this.setrealtimedata(this.props.realtimedata.resultreal.p_status)

        return (
          <div>


            //<h1>{this.setrealtimedata(this.props.realtimedata.resultreal.p_status)}</h1>

          //  <h1>{this.setrealtimedata(this.props.realtimedata.resultreal.a_status)}</h1>
            <div className="name">data</div>
            <div className="bar"><ProgressBar bsStyle={this.setstylebar(this.props.realtimedata.resultreal.data1)} active now={this.props.realtimedata.resultreal.data1} /></div>
            <div className="name">data</div>
            <div className="bar"><ProgressBar bsStyle={this.setstylebar(this.props.realtimedata.resultreal.data2)} active now={this.props.realtimedata.resultreal.data2} /></div>
            <div className="name">data</div>
            <div className="bar"><ProgressBar bsStyle={this.setstylebar(this.props.realtimedata.resultreal.data3)} active now={this.props.realtimedata.resultreal.data3} /></div>
            <div className="name">data</div>
            <div className="bar"><ProgressBar bsStyle={this.setstylebar(this.props.realtimedata.resultreal.data4)} active now={this.props.realtimedata.resultreal.data4} /></div>

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
              resolve(axios.get('https://petrological-separa.000webhostapp.com/apireal.php')
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
