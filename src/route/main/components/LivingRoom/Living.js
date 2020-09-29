/**
 * Displaying possibility of fire, temperature and smoke value in the room 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import React from 'react';
import { getLivingRoomData } from "../../modules/actions"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import AlertLivingRoom from "./AlertLivingRoom"
import PercentageLivingRoom from './PercentageLivingRoom';
import "../style.css"


function LivingRoomDetail(props) {

    const { living, getLivingRoomData } = props
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    //``` Load data by calliing Redux function to handle API call
    useEffect(() => {
        const interval = setInterval(() => {
            getLivingRoomData()
        }, 5000);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }} >
            <PercentageLivingRoom />
            <div style={{ width: "100%", paddingLeft: "20rem", maxHeight: "50rem", width: "45rem" }}>
                <h1 style={{ textAlign: "center" }} >Status</h1>
                <div className="border">
                    <div>
                        <div className="p_style">
                            <p>Temperature</p>
                            <p>{Object.values(living)[1]}</p>
                        </div>
                        <div className="p_style">
                            <p>Smoke Density</p>
                            <p>{Object.values(living)[0]}</p>
                        </div>
                        <div className="p_style">
                            <p>Local Time</p>
                            <p>{hours}:{minutes}</p>
                        </div>
                    </div>
                    <AlertLivingRoom data={living} />
                </div>
            </div>
        </div>
    )
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ mainData }) => {
    return {
        living: mainData.livingRoomData
    }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
    getLivingRoomData,
}
export default connect(mapStateToProps, mapDispatchToProps)(LivingRoomDetail)