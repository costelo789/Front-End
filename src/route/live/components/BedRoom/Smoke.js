/**
 * A line chart to display smoke in the room
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import React from "react";
import { Line,Chart } from "react-chartjs-2";
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {getBedRoomData} from '../../modules/actions'
Chart.plugins.register([ChartAnnotation]); // Global

function Smoke(props) {
  const { smoke, getBedRoomData } = props
  const [smokeData,setSmokeData]=useState([60])
  const [labels,setlabels]=useState([0])
  const[temp,setTemp]=useState(0)

  //``` Execute function to load data from API 
  useEffect(()=>{
    const interval = setInterval(() => {
      getBedRoomData()
      setTemp(temp => temp + 60);
    }, 2000);
    return () => clearInterval(interval);
    
  },[])

  //``` Assign data from API to chart
  useEffect(()=>{
    if(typeof(smoke) !== 'undefined'){
      if(Object.values(smoke)[0]!= undefined){
        setSmokeData([...smokeData,Object.values(smoke)[0]])
        }
        labels.map(item=>{
          if(item!== temp){
            setlabels([...labels,temp])
          }
        })
              
  }
  },[temp])
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Smoke",
            data: smokeData,
            fill: true,
            backgroundColor: "rgba(72, 255, 34, 0.8)",
            borderColor: "rgba(75,192,192,1)"
          },
        ]
      };

      return(
        <Line data={data}
        height={80}
        options={{
          annotation: {
            annotations: [ {
              id: 'hline3',
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: 80,
              borderColor: 'red',
              borderWidth: 1,
              label: {
                 backgroundColor: "red",
                 content: "Danger",
                 enabled: true
              }
           }, ]
          },
          scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'ppm'
                      }
                },
                
            ],
            xAxes: [
              {
                  scaleLabel: {
                      display: true,
                      labelString: 'Time'
                    }
              },
              
          ]
        },}
        } />
      )
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ liveData }) => {
  return {
      smoke:liveData.bedRoomData
  }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getBedRoomData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Smoke)