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
import { getPercentageKitchenData,feedbackServer } from "../../modules/actions"


function AlertKitchen(props) {
  //const {roomData,showModal}=props
  const { percentageKitchen, getPercentageKitchenData,feedbackServer } = props
  const [show, setShow] = useState()
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();

  //``` Load data by calliing Redux function to handle API call
  useEffect(() => {
    const interval = setInterval(() => {
      getPercentageKitchenData()
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (percentageKitchen != null) {
      if (percentageKitchen > 80) {
        setShow(true)
      }
    }
  }, [percentageKitchen])

  const handleCancel = (kitchen) => {
    const data = {
      temperature: parseInt(Object.values(kitchen)[1]),
      smoke:parseInt(Object.values(kitchen)[0]),
      status: "False"
    };
    feedbackServer(data)
    setShow(false)
  }


  const handleConfirm = (kitchen) => {
    const data = {
      temperature: parseInt(Object.values(kitchen)[1]),
      smoke:parseInt(Object.values(kitchen)[0]),
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
          There is a fire occurs in your kitchen. Is that correct?
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
    percentageKitchen: mainData.percentageKitchenData
  }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getPercentageKitchenData,
  feedbackServer
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertKitchen)
