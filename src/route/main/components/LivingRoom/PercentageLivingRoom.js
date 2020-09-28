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
import { getPercentageLivingRoomData } from "../../modules/actions"
import { useState, useEffect } from 'react';



function PercentageLivingRoom(props) {
    const { percentageLivingRoom, getPercentageLivingRoomData } = props

    //``` Load data by calliing Redux function to handle API call
    useEffect(() => {
        const interval = setInterval(() => {
            getPercentageLivingRoomData()
        }, 5000);

    }, [])


    return (
        <div style={{ maxHeight: "30%", maxWidth: "30%" }}>
            <h1 style={{ textAlign: "center" }}>Fire Probability</h1>

            {(() => {
                if (percentageLivingRoom > 50 && percentageLivingRoom < 80) {
                    return (
                        <div>
                            <CircularProgressbarWithChildren value={percentageLivingRoom || 0} styles={buildStyles({ pathColor: "red" })}>
                                <strong style={{ fontSize: 40, marginTop: -5, color: "#fee12b" }}>{percentageLivingRoom}%</strong>
                                <div><p style={{ color: "#fee12b", paddingRight: 10, fontSize: 20 }}>Imminent</p></div>
                            </CircularProgressbarWithChildren>
                        </div>
                    )
                } else if (percentageLivingRoom < 50) {
                    return (
                        <div>
                            <CircularProgressbarWithChildren value={percentageLivingRoom || 0} styles={buildStyles({ pathColor: "green" })}>
                                <strong style={{ fontSize: 40, marginTop: -5, color: "green" }}>{percentageLivingRoom}%</strong>
                                <div><p style={{ color: "green" }}>Normal</p></div>
                            </CircularProgressbarWithChildren >
                        </div>)

                }
                else {
                    return (
                        <div>
                            <CircularProgressbarWithChildren value={percentageLivingRoom || 0} styles={buildStyles({ pathColor: "red" })}>
                                <strong style={{ fontSize: 40, marginTop: -5, color: "red" }}>{percentageLivingRoom}%</strong>
                                <div><p style={{ color: "red", fontSize:40 }}>Danger</p></div>
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
        percentageLivingRoom: mainData.percentageLivingRoomData
    }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
    getPercentageLivingRoomData,
}
export default connect(mapStateToProps, mapDispatchToProps)(PercentageLivingRoom)