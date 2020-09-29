/**
 * An alert message to display to user when high temperature or smoke is detected
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
import { getKitchenData, feedbackServer } from "../../modules/actions"


function AlertKitchen(props) {
  const { kitchen, getKitchenData, feedbackServer } = props
  const [show, setShow] = useState()

  //``` Execute function to load data from API
  useEffect(() => {
    const interval = setInterval(() => {
      getKitchenData()
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  //``` Display alert if temperature and smoke value is high
  useEffect(() => {
    if (Object.values(kitchen) != "undefined") {
      if (Object.values(kitchen)[1] > 50 || Object.values(kitchen)[0] > 90) {
        setShow(true)
      }
    }
  }, [kitchen])
  const handleCancel = (kitchen) => {
    const data = {
      temperature: parseInt(Object.values(kitchen)[1]),
      smoke: parseInt(Object.values(kitchen)[0]),
      status: "False"
    };
    feedbackServer(data)
    setShow(false)
  }


  const handleConfirm = (kitchen) => {
    const data = {
      temperature: parseInt(Object.values(kitchen)[1]),
      smoke: parseInt(Object.values(kitchen)[0]),
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
const mapStateToProps = ({ liveData }) => {
  return {
    kitchen: liveData.kitchenData
  }
}

//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getKitchenData,
  feedbackServer
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertKitchen)
