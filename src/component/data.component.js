import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
// import User from './src/User.js';
import axios from'axios';
import './style/tablestyle.css'
import './style/statusstyle.css'
import moment from 'moment';
const url = localStorage.getItem("url");





class DataComponent extends Component {

  constructor() {
      super();
      this.state = {
          data: '',
          loading: true,
          tbname: '',
          format: "YYYY/MM/DD",
          inputFormat: "DD/MM/YYYY",
          mode: "date",
          type: "d"

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



    JSONToCSVConvertor(ReportTitle,ShowLabel) {
        console.log(this.props.dl_data.resultDb);
        var JSONData = this.props.data.resultDb;
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
        //var data_uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        var data_uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        console.log(data_uri);
        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension
        //this trick will generate a temp <a /> tag





        var link = document.createElement("a");
        link.href = data_uri;

        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName+".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);


    }
    jsontopdf(ReportTitle){

        var jsPDF = require('jspdf');
        require('jspdf-autotable');
        var JSONData = this.props.data.resultDb;
        var doc = new jsPDF();
        var col = ["id","Date","Time","Soil Moisture(%)"];
        var rows = [];

        for(var i in JSONData){
                var temp = [ JSONData[i].id ,JSONData[i].date_date ,JSONData[i].time_time ,JSONData[i].data ];
                rows.push(temp);

        }

        var header = ()=>{
            doc.setFontSize(18);
            doc.setTextColor(40);
            doc.setFontStyle('normal');
            //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
            doc.text("Report soil moisture from "+ReportTitle, 15, 20,);
        };

        var options = {
            beforePageContent: header,
            margin: {
                top: 30
            }
        };

        doc.autoTable(col,rows, options);

        doc.save(ReportTitle+'.pdf');
    }


    download_csv(tb_name,ReportTitle,ShowLabel){
        //this.props.setDownload(tb_name)
        this.JSONToCSVConvertor(ReportTitle,ShowLabel)


    }
    download_pdf(tb_name,ReportTitle){

        this.jsontopdf(ReportTitle)

    }

    onChange_date(newDate){

        if(newDate > moment().format('YYYY/MM/DD')){
            alert("วันที่เริ่มต้นไม่ถูกต้องกรุณาเลือกวันที่ใหม่");
            this.props.set_date(moment().format('YYYY/MM/DD'));
            this.props.set_ldate(moment().format('YYYY/MM/DD'));

        }else{
            this.props.setData(this.state.tbname,newDate,newDate)
            this.props.set_date(newDate);
            this.props.set_ldate(newDate);

        }
    }
    onChange_ldate(newDate){

        if((newDate > moment().format('YYYY/MM/DD'))||(newDate < this.props.date.date)){
            alert("วันที่สิ้นสุดไม่ถูกต้องกรุณาเลือกวันที่ใหม่");
            this.props.set_ldate(moment().format('YYYY/MM/DD'));
        }else{
            this.props.setData(this.state.tbname,this.props.date.date,newDate)
            this.props.set_ldate(newDate);

        }
    }







  componentDidMount(){
    var tablename = this.props.name;
    this.props.setData(tablename,this.props.date.date,this.props.date.ldate)
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
        this.props.setData(tablename,this.props.date.date,this.props.date.ldate)
        this.setState({
              tbname:tablename
        });
      }
      return (
        <div>
          <div>
              <Row sm={12} lg={12}>
                  <div className="header">กราฟแสดงค่าสถิติความชื้้น</div>
              </Row >
              <br/>
              <Row className="chartcircle">
                  <Row className="show-grid">
                      <div className="header2">ชื่อเซ็นเซอร์ : {this.props.show_name}</div>
                      <div className="header2">เลือกวันที่ของตาราง</div>
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
                          <button onClick={()=>this.download_pdf(this.props.name,this.props.show_name_en)} className="button-save" >
                              <span className="glyphicon glyphicon-file" aria-hidden="true"/>  Save as PDF
                          </button>
                          <button onClick={()=>this.download_csv(this.props.name,this.props.show_name_en,true)} className="button-save" >
                              <span className="glyphicon glyphicon-list-alt" aria-hidden="true"/>  Save as Excel
                          </button>
                      </Row >
                  </Row >
              </Row>
              <br/>
              <Row className="chartcircle">
                  <Row className="show-grid">
                      <Col sm={12} lg={12}>
                          <table className="table">
                              <tr className="tr">
                                  <th className="th">date</th>
                                  <th className="th">time</th>
                                  <th className="th">data</th>
                              </tr>
                              {content}
                          </table>
                      </Col>
                  </Row >
              </Row>
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
      date : state.date,
      realtimedata: state.real
  };
};
const mapDispatchToprops = (dispatch) =>{
  return{
      setData : (value,date,ldate) =>{
        dispatch({
          type: "FETCH_DB",
          payload :new Promise((resolve,reject) => {
            setTimeout(()=>{
              resolve(axios.get(url+'/total_data', {
                    params: {
                         name: value,
                         date:date,
                         ldate:ldate
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

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(DataComponent));
