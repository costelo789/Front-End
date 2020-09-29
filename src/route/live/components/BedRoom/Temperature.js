/**
 * A line chart to display temperature in the room
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import React from "react";
import { Line, Chart } from "react-chartjs-2";
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { getBedRoomData } from '../../modules/actions'



Chart.plugins.register([ChartAnnotation]); // Global
Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Temperature(props) {
  const { temperature, getBedRoomData } = props
  const [temperatureData, setTemperatureData] = useState([60])
  const [labels, setlabels] = useState([0])
  const [temp, setTemp] = useState(0)

  //``` Execute function to load data from API
  useEffect(() => {
    const interval = setInterval(() => {
      getBedRoomData()
      setTemp(temp => temp + 60);
    }, 5000);
    return () => clearInterval(interval);

  }, [])

  //``` Assign data from API to chart
  useEffect(() => {
    if (typeof (temperature) !== 'undefined') {
      if (Object.values(temperature)[0] != undefined) {
        setTemperatureData([...temperatureData, Object.values(temperature)[0]])

      }
      labels.map(item => {
        if (item !== temp) {
          setlabels([...labels, temp])
        }
      })

    }
  }, [temp])

  // useEffect(()=>{
  //   console.log(Object.values(datas))
  // },[])

  // if(Object.values(temperature)[0]>=10){
  //   return(
  //     <Modal
  //     isOpen={true}
  //     //onAfterOpen={afterOpenModal}
  //     onRequestClose={false}
  //     style={customStyles}
  //     contentLabel="Example Modal"
  //   >

  //     <h2 >Hello</h2>
  //     <button >close</button>
  //     <div>I am a modal</div>
  //     <form>
  //       <input />
  //       <button>tab navigation</button>
  //       <button>stays</button>
  //       <button>inside</button>
  //       <button>the modal</button>
  //     </form>
  //   </Modal>
  //   )
  // }

  console.log(labels)

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

  return (
    <div>
      <Line data={data}
        height={80}
        options={{
          annotation: {
            annotations: [{
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
            },]
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
    temperature: liveData.bedRoomData
  }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getBedRoomData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Temperature)