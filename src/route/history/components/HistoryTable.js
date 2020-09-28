/**
 * Create a table for displaying detail information of fire cases detected in the system 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import {getAllHistoryData} from '../modules/actions'



function HistoryTable(props) {

    
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
    const { history, getAllHistoryData } = props
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = useState();

    useEffect(()=>{
      getAllHistoryData()
    },[])
    console.log(history)


    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
   return history != null ? (
    <div style={{ paddingTop: "2rem" }}>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Alarm Status</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Device Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map(row => {
              return (
                <TableRow >
                  <TableCell component="th" scope="row">
                    {row.history_id}
                  </TableCell>
                  <TableCell align="right">{row.alarm_status}</TableCell>
                  <TableCell align="right">{row.loc_name}</TableCell>
                  <TableCell align="right">{row.device_name}</TableCell>
                  <TableCell align="right">{row.date_reading}</TableCell>
                  <TableCell align="right">{row.alarm_type}</TableCell>
                </TableRow>

              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={20}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  </div>
   ) : null
}

//``` Connect to Redux store and retrive the state
const mapStateToProps = ({ historyData }) => {
  return {
      history:historyData.historyDatas
  }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getAllHistoryData,
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTable)