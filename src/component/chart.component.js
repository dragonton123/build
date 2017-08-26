import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import axios from'axios';
import { Chart } from 'react-google-charts';
import {Bar, Line, Pie} from 'react-chartjs-2';

//var RadarChart = require("react-chartjs-2").Radar;
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

            <Bar
                data={this.state.chartData}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities In '+this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                }}
            />

            );
    }
}


export default ChartComponent;