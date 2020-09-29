/**
 * Creating a dynamic circle to displayed percentage of fire 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */


import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//import "./style.css"
import { connect } from 'react-redux'
import { getPercentageBedRoomData } from "../../modules/actions"
import { useState, useEffect } from 'react';



function PercentageBedRoom(props) {
    const { percentageBedRoom, getPercentageBedRoomData } = props
    useEffect(() => {
        const interval = setInterval(() => {
            getPercentageBedRoomData()
        }, 5000);

    }, [])


    return (
        <div style={{ maxHeight: "30%", maxWidth: "30%" }}>
            <h1 style={{ textAlign: "center" }}>Fire Probability</h1>

            {(() => {
                if (percentageBedRoom > 50 && percentageBedRoom < 80) {
                    return (
                        <div>
                            <CircularProgressbarWithChildren value={percentageBedRoom} styles={buildStyles({ pathColor: "red" })}>
                                <strong style={{ fontSize: 40, marginTop: -5, color: "#fee12b" }}>{percentageBedRoom}%</strong>
                                <div><p style={{ color: "#fee12b", fontSize: 40 }}>Imminent</p></div>
                            </CircularProgressbarWithChildren>
                        </div>
                    )
                } else if (percentageBedRoom < 50) {
                    return (
                        <div>
                            <CircularProgressbarWithChildren value={percentageBedRoom} styles={buildStyles({ pathColor: "green" })}>
                                <strong style={{ fontSize: 40, marginTop: -5, color: "green" }}>{percentageBedRoom}%</strong>
                                <div><p style={{ color: "green" }}>Normal</p></div>
                            </CircularProgressbarWithChildren >
                        </div>)

                }
                else {
                    return (
                        <div>
                            <CircularProgressbarWithChildren value={percentageBedRoom || 0} styles={buildStyles({ pathColor: "red" })}>
                                <strong style={{ fontSize: 40, marginTop: -5, color: "red" }}>{percentageBedRoom || 0}%</strong>
                                <div><p style={{ color: "red", fontSize: 40 }}>Danger</p></div>
                            </CircularProgressbarWithChildren >
                        </div>)
                }
            })()}
        </div>
    )
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ mainData }) => {
    return {
        percentageBedRoom: mainData.percentageBedRoomData
    }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
    getPercentageBedRoomData,
}
export default connect(mapStateToProps, mapDispatchToProps)(PercentageBedRoom)