/**
 * Creating an alert to warn user when a high possibility of fire is detected 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */


import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getPercentageBedRoomData,feedbackServer } from "../../modules/actions"


function AlertBedRoom(props) {
  //const {roomData,showModal}=props
  const { percentageBedRoom, getPercentageBedRoomData,feedbackServer } = props
  const [show, setShow] = useState()
  console.log(show, percentageBedRoom)

  //``` Load data by calliing Redux function to handle API call
  useEffect(() => {
    const interval = setInterval(() => {
      getPercentageBedRoomData()
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (percentageBedRoom != null) {
      if (percentageBedRoom > 80) {
        setShow(true)
      }
    }
  }, [percentageBedRoom])
  const handleCancel = (bedroom) => {
    const data = {
      temperature: parseInt(Object.values(bedroom)[1]),
      smoke:parseInt(Object.values(bedroom)[0]),
      status: "False"
    };
    feedbackServer(data)
    setShow(false)
  }


  const handleConfirm = (bedroom) => {
    const data = {
      temperature: parseInt(Object.values(bedroom)[1]),
      smoke:parseInt(Object.values(bedroom)[0]),
      status: "True"
    };
    feedbackServer(data)
    setShow(false)
  }
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Warning
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Warning</h4>
        <p>
          There is a fire occurs in your appartment. Is that correct?
          </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleConfirm}>
          Confirm
          </Button>
        <Button variant="primary" onClick={handleCancel}>
          False Alarm
          </Button>
      </Modal.Footer>
    </Modal>
  );
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
  feedbackServer
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertBedRoom)
