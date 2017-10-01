import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
// import User from './src/User.js';
import axios from'axios';
import './style/tablestyle.css'
import './style/statusstyle.css'
//import * as fs from 'fs';
import * as json2xls from 'json2xls'





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
    save(){

        var json2csv = require('json2csv');
        var fs = require('fs');
        var fields = ['car', 'price', 'color'];
        var myCars = [
            {
                "car": "Audi",
                "price": 40000,
                "color": "blue"
            }, {
                "car": "BMW",
                "price": 35000,
                "color": "black"
            }, {
                "car": "Porsche",
                "price": 60000,
                "color": "green"
            }
        ];
        var csv = json2csv({ data: myCars, fields: fields });
        console.log(csv);
       // window.open( "data:text/csv;charset=utf-8," + csv)
        var json3 = { "d": "[{\"Id\":1,\"UserName\":\"Sam Smith\"},{\"Id\":2,\"UserName\":\"Fred Frankly\"},{\"Id\":1,\"UserName\":\"Zachary Zupers\"}]" }



        var array = typeof json3.d != 'object' ? JSON.parse(json3.d) : json3.d;

        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';

            for (var index in array[i]) {
                line += array[i][index] + ',';
            }

            // Here is an example where you would wrap the values in double quotes
            // for (var index in array[i]) {
            //    line += '"' + array[i][index] + '",';
            // }

            line.slice(0,line.Length-1);

            str += line + '\r\n';
        }
        console.log(str)
        var link = document.createElement('a');
        link.download = "fileName.csv";
        link.href = 'data:text/csv;charset=utf-8,' + str;
        link.click();





    }


    JSONToCSVConvertor(ReportTitle,ShowLabel) {
        console.log(this.props.dl_data.resultDb);
        var JSONData = this.props.dl_data.resultDb;
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';
        //Set Report title in first row or line

        CSV += ReportTitle + '\r\n\n';

        //This condition will generate the Label/Header
        if (ShowLabel) {
            var row = "";

            //This loop will extract the label from 1st index of on array
            for (var index in arrData[0]) {

                //Now convert each value to string and comma-seprated
                row += index + ',';
            }

            row = row.slice(0, -1);

            //append Label row with line break
            CSV += row + '\r\n';
        }

        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
            var row = "";

            //2nd loop will extract each column and convert it in string comma-seprated
            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }

            row.slice(0, row.length - 1);

            //add a line break after each row
            CSV += row + '\r\n';
        }

        if (CSV == '') {
            alert("Invalid data");
            return;
        }

        //Generate a file name
        var fileName = "MyReport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g,"_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension

        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    download(tb_name,ReportTitle,ShowLabel){
        this.props.setDownload(tb_name)
        setTimeout(()=>{this.JSONToCSVConvertor(ReportTitle,ShowLabel)},3000);

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
      //this.props.setData(this.state.tbname)
    },60000);
  }
  render() {
      let content;

        if (this.state.loading) {
        content = <div>Loading...</div>;
        } else {

        content = this.state.data.map((user,index) => {

          return (
            <tr key={index} className="tr">
              <td  className="td">{user.date_date}</td>
              <td  className="td">{user.time_time}</td>
              <td  className="td">{user.data}</td>
            </tr>
          );
        });
        }
      if(this.props.name !== this.state.tbname){
        var tablename = this.props.name;
        this.props.setData(tablename)
        this.setState({
              tbname:tablename
        });
      }
      return (
        <div>
          <div>
          <div>{this.props.show_name}</div>
          <table className="table">
            <tr className="tr">
                <th className="th">date</th>
                <th className="th">time</th>
                <th className="th">data</th>
            </tr>
            {content}
          </table>
              <button onClick={()=>this.download(this.props.name,this.props.show_name,true)}>บันทึก</button>
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
      dl_data: state.download,
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
      setDownload : (value) =>{
          dispatch({
              type: "FETCH_DOWNLOAD",
              payload :new Promise((resolve,reject) => {
                  setTimeout(()=>{
                      resolve(axios.get('https://petrological-separa.000webhostapp.com/api/total_data', {
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
