/**
 * One of four major component used to displayed summary information of fire cases detected by the system  
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PieChart from "./PieChart"
import HistoryTable from "./HistoryTable"
import BarChart from "./BarChart"


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function HistoryDetail() {
  return (
    <div>
      <div align="center">
        <h1>History</h1>
      </div>
      <div className="row" style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <BarChart />
        </div>

        <div style={{ width: "50%", margin: "0%" }}>
          <PieChart />
        </div>
      </div>
      <HistoryTable />
    </div>
  )
}

export default HistoryDetail;
