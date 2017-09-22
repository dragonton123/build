import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import {Button,Grid, Row, Col, Clearfix,Label} from 'react-bootstrap';
import './style/chartstyle.css'
//var RadarChart = require("react-chartjs-2").Radar;

const ReactHighcharts = require('react-highcharts');


const config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 100, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 100]
    }]
};
class ChartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        };
    }
    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
    }

    render() {
        return (

           <div>
               <div>
                   <Grid>
                       <Row className="show-grid">
                           <Col sm={12} lg={12}><ReactHighcharts config = {config}></ReactHighcharts></Col>
                       </Row>
                   </Grid>
               </div>
               <h1>dd</h1>>
           </div>

            );
    }
}


export default ChartComponent;