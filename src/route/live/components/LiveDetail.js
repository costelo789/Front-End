/**
 * A major component for dispaying current temperature and smoke value in each room
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Kitchen from './Kitchen/index';
import BedRoom from './BedRoom/index';
import LivingRoom from './Living/index';


function LiveDetail(props) {
  const useStyles = makeStyles({
    root: {
      width: '100%',

    },
    container: {
      maxHeight: 440,
    },
  });

  const [room, setRoom] = React.useState('BedRoom');
  const handleChange = (event) => {
    setRoom(event.target.value);
  };

  return (
    <div>
  <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={room}
          onChange={handleChange}
         style={{
           width: 100, left: '50%', marginLeft: -25}}
        >
          <MenuItem value={'BedRoom'}>BedRoom</MenuItem>
          <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
          <MenuItem value={"Living_Room"}>Living_Room</MenuItem>
        </Select>
        <div>
        {(() => {
        if (room=="Kitchen") {
          return (
            <Kitchen/>
          )
        } else if (room=="BedRoom") {
          return (
            <BedRoom/>
          )
        } else {
          return (
            <LivingRoom/>
          )
        }
      })()}
        </div>
    </div>
    );

    
}
export default LiveDetail;