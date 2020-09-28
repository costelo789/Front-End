/**
 * One of four major component used to displayed possibility, temperatur and smoke value in each room 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import React from 'react';
import { useState, useEffect } from 'react';
import BedRoom from '../components/BedRoom/index';
import Kitchen from '../components/Kitchen/index';
import Living from '../components/LivingRoom/index';

function MainDetail(props) {
  const [room, setRoom] = useState("BedRoom")

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>MainBoard</h1>
      <div style={{ display: "flex", flexDirection: "row", paddingLeft: "28rem" }} className="row">
        <p>Current Room:</p>
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="BedRoom" >Bed Room</option>
          <option value="Kitchen" >Kitchen</option>
          <option value="Living">Living Room</option>
        </select>

      </div>
      {(() => {
        if (room == "BedRoom") {
          return (
            <div>
              <BedRoom />
            </div>
          )
        }
        else if (room == "Kitchen") {
          return (
            <div>
              <Kitchen />
            </div>
          )
        }
        else {
          return (
            <div>
              <Living />
            </div>
          )
        }
      })()}
    </div>
  )
}

export default MainDetail;