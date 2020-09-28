/**
 * A line chart to display temperature in the room
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
import { useAlert } from 'react-alert'
import {getLivingRoomData} from '../../modules/actions'



Chart.plugins.register([ChartAnnotation]); // Global

function Temperature(props) {
  const { temperature, getLivingRoomData } = props
  const [temperatureData,setTemperatureData]=useState([60])
  const [labels,setlabels]=useState([0])
  const[temp,setTemp]=useState(0)

  //``` Execute function to load data from API
  useEffect(()=>{
    const interval = setInterval(() => {
      getLivingRoomData()
      console.log("API is fetched")
      setTemp(temp => temp + 60);
    }, 20000);
    return () => clearInterval(interval);
    
  },[])

  //``` Assign data from API to chart
  useEffect(()=>{
    if(typeof(temperature) !== 'undefined'){
      if(Object.values(temperature)[0]!= undefined){
        setTemperatureData([...temperatureData,Object.values(temperature)[0]])
        
        }
        labels.map(item=>{
          if(item!== temp){
            setlabels([...labels,temp])
          }
        })
              
  }
  },[temp])

  // useEffect(()=>{
  //   console.log(Object.values(datas))
  // },[])
// if(Object.values(temperature)[0]>=10){
//   console.log("true")
//   return(
//     <div>This is a texs</div>
//   )
  
// }

 const data = {
        labels: labels,
        datasets: [
          {
            label: "Temperatute",
            data: temperatureData,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
        ]
      };

      return(
       <div>
        <Line data={data}
        height={80}
        options={{
          annotation: {
            annotations: [ {
              id: 'hline3',
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: 50,
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
                        labelString: 'C'
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
        },
        }
        
        } />
        </div>


      )
}


//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ liveData }) => {
  return {
      temperature:liveData.livingRoomData
  }
}


//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getLivingRoomData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)