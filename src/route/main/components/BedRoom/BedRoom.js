/**
 * Displaying possibility of fire, temperature and smoke value in the room 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import React from 'react';
import "../style.css"
import { getBedRoomData } from "../../modules/actions"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import AlertBedRoom from "./AlertBedRoom"
import PercentageBedRoom from './PercentageBedRoom';


function BedRoomDetail(props) {

    const { bedRoom, getBedRoomData } = props
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    //``` Load data by calliing Redux function to handle API call
    useEffect(() => {
        const interval = setInterval(() => {
            getBedRoomData()
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }} >
            <PercentageBedRoom />
            <div style={{ width: "100%", paddingLeft: "20rem", maxHeight: "50rem", width: "45rem" }}>
                <h1 style={{ textAlign: "center" }} >Status</h1>
                <div className="border">
                    <div>
                        <div className="p_style">
                            <p>Temperature</p>
                            <p>{Object.values(bedRoom)[1]}</p>
                        </div>
                        <div className="p_style">
                            <p>Smoke Density</p>
                            <p>{Object.values(bedRoom)[0]}</p>
                        </div>
                        <div className="p_style">
                            <p>Local Time</p>
                            <p>{hours}:{minutes}</p>
                        </div>
                    </div>
                    <AlertBedRoom data={bedRoom} />
                </div>
            </div>
        </div>
    )
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ mainData }) => {
    return {
        bedRoom: mainData.bedRoomData
    }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
    getBedRoomData,
}
export default connect(mapStateToProps, mapDispatchToProps)(BedRoomDetail)