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
       tbname: '',
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
    var tablename = this.props.name;
    this.props.setData(tablename)
    this.setState({
          tbname:tablename
    });

    setInterval(()=>{
      this.setdata()
    },1000);

    setInterval(()=>{
      this.props.setData(this.state.tbname)
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
            </tr>
          );
        });
        }
      if(this.props.name != this.state.tbname){
        var tablename = this.props.name;
        this.props.setData(tablename)
        this.setState({
              tbname:tablename
        });
      }
      return (
        <div>
          <div>
          <div>{this.state.tbname}</div>
          <table>
            <tr>
                <th>id</th>
                <th>data</th>
                <th>datetime</th>
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
      setData : (value) =>{
        dispatch({
          type: "FETCH_DB",
          payload :new Promise((resolve,reject) => {
            setTimeout(()=>{
              resolve(axios.get('https://dyspathetic-februar.000webhostapp.com/apidb.php', {
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
      }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(DataComponent));
