/**
 * Creating a Pie chart to show summary information of fire, normal, imminent cases detected by the system 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import { Pie } from 'react-chartjs-2'
import React from 'react';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPieChartData } from "../modules/actions"
import update from 'immutability-helper';


function PieChart(props) {
    const { pieChart, getPieChartData } = props
    const [pieData, setPieData] = useState([1, 1, 1])

    //``` Load data by calliing Redux function to handle API call
    useEffect(() => {
        getPieChartData()
    }, [])

    //``` Set loaded data form API to chart data field
    useEffect(() => {
        if (typeof (pieChart) !== 'undefined') {
            let newArray = [Object.values(pieChart)[2], Object.values(pieChart)[0], Object.values(pieChart)[1]]
            setPieData(newArray)
        }
    }, [pieChart])

    const statusData = {
        labels: [
            "Normal",
            "Fire",
            "Imminent",
        ],
        datasets: [
            {
                label: "Status",
                backgroundColor: ["#009900", "#ff3300", "#ffff00"],
                borderColor: "#fff",
                borderWidth: 4,
                data: pieData
            }
        ]
    }
    return (
        <Pie
            data={statusData}
            options={{
                title: {
                    display: true,
                    text: "Total cases",
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: "bottom"
                },
                pieLabel: {
                    render: "percentage",
                    fontSize: 20
                }
            }}
        />
    )
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ historyData }) => {
    return {
        pieChart: historyData.pieChartData
    }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
    getPieChartData,
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)