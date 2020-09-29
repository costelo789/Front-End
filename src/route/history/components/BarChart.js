/**
 * Creating bar chart to sumarize fire cases detected by the system since the last 6 months
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import { Bar } from 'react-chartjs-2'
import React from 'react';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBarChartData } from "../modules/actions"
import update from 'immutability-helper';
import monthConverter from "./MonthCoverter"

function BarChart(props) {
  const { barChart, getBarChartData } = props
  const [barData, setBarData] = useState([])

  let newDate = new Date()
  let month = newDate.getMonth()
  let newArray = []

  //``` Load bar chart data form server
  useEffect(() => {
    getBarChartData()
  }, [])

  //``` set data loaded form API to data field of the chart 
  useEffect(() => {
    if (typeof (barChart) !== 'undefined') {
      setBarData(barChart)
    }
  }, [barChart])

  newArray = monthConverter(month)

  var datas = {
    labels: newArray,
    datasets: [{
      label: "Recorded fire",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: barData,
    }]
  }
  return (
    <Bar
      data={datas}
      scaleStepWidth="1"
      options={{
        title: {
          display: true,
          text: "In the last 6 months",
          fontSize: 20
        },
        legend: {
          display: true,
          position: "top",
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "cases"
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1
                //max: 100
              }
            }
          ]
        }
      }}
    />

  )
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ historyData }) => {
  return {
    barChart: historyData.barChartData
  }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getBarChartData,
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart)