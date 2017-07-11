import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
// import User from './src/User.js';
import axios from'axios';
import './style/tablestyle.css'
import './style/statusstyle.css'

class DataComponent extends Component {

  constructor() {
      super();
      this.state = {
       data: '',
       loading: true,
      };
    }

    setdata() {
      var myArray = this.props.data.resultDb;
      var realdata = this.props.realtimedata.resultreal;
      console.log(myArray);
      this.setState({
            data:myArray,
            real:realdata,
            loading: false
      });

  }


  componentDidMount(){
    setInterval(()=>{
      this.setdata()
    },1000);

    setInterval(()=>{
      //this.props.setData()
    },60000);
  }
  render() {
      let content;

        if (this.state.loading) {
        content = <div>Loading...</div>;
        } else {

        content = this.state.data.map((user,index) => {

          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.data}</td>
              <td>{user.status_pump}</td>
              <td>{user.status_auto}</td>
            </tr>
          );
        });
        }
      return (
        <div>
          <div>
          <table>
            <tr>
              <th>id</th>
              <th>data</th>
              <th>status_pump</th>
              <th>status_auto</th>
            </tr>
            {content}
          </table>
          </div>
        </div>
      );
  }

}


const mapStateToProps = (state) => {
  return{
      user: state.user,
      math: state.math,
      data: state.db,
      realtimedata: state.real
  };
};
const mapDispatchToprops = (dispatch) =>{
  return{
      setData: () =>{
        dispatch({
          type: "FETCH_DB",
          payload :new Promise((resolve,reject) => {
            setTimeout(()=>{
              resolve(axios.get('http://tossaphornserver.esy.es/Amoeba/apidb.php')
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

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(DataComponent));
