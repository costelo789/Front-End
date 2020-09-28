/**
 * Displaying possibility of fire, temperature and smoke value in the room 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import React from 'react';
import { getKitchenData } from "../../modules/actions"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import AlertKitchen from "./AlertKitchen"
import PercentageKitchen from './PercentageKitchen';
import "../style.css"


function KitchenDetail(props) {
    
    const { kitchen, getKitchenData } = props 
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    //``` Load data by calliing Redux function to handle API call
    useEffect(()=>{
        const interval = setInterval(() => {
            getKitchenData()
          }, 5000);
          return () => clearInterval(interval);
      },[])

    return (
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }} >
        <PercentageKitchen/>
        <div style={{ width: "100%", paddingLeft: "20rem", maxHeight: "50rem", width: "45rem" }}>
            <h1 style={{ textAlign: "center" }} >Status</h1>
            <div className="border">
                    <div>
                    <div className="p_style">
                    <p>Temperature</p>
                    <p>{Object.values(kitchen)[1]}</p>
                </div>
                <div className="p_style">
                    <p>Smoke Density</p>
                    <p>{Object.values(kitchen)[0]}</p>
                </div>
                <div className="p_style">
                    <p>Local Time</p>
                    <p>{hours}:{minutes}</p>
                </div>
                </div>
                <AlertKitchen/>
            </div>
        </div>
        </div>
    )
}
//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ mainData }) => {
    return {
        kitchen:mainData.kitchenData
    }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
    getKitchenData,
}
export default connect(mapStateToProps, mapDispatchToProps)(KitchenDetail)