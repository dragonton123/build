import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
class RealtimedataComponent extends Component{
  constructor() {
      super();
      this.state = {
       real:'',
       sa1 : <span className="off"></span>,
       sp1 : <span className="off"></span>
      };
    }

    setrealtimedata(value){
      if(value == "1"){

      return (<span className="on"></span>);
      }else{
      return (<span className="off"></span>);
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

            <h1>data :{this.props.realtimedata.resultreal.data}</h1>
            <h1>status_pump :{this.props.realtimedata.resultreal.p_status}</h1>
            <h1>{this.setrealtimedata(this.props.realtimedata.resultreal.p_status)}</h1>
            <h1>status_auto :{this.props.realtimedata.resultreal.a_status}</h1>
            <h1>{this.setrealtimedata(this.props.realtimedata.resultreal.a_status)}</h1>

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
              resolve(axios.get('https://dyspathetic-februar.000webhostapp.com/apireal.php')
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
