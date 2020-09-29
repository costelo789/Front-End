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
import { getLivingRoomData, feedbackServer } from "../../modules/actions"


function AlertLivingRoom(props) {
  const { living, getLivingRoomData, feedbackServer } = props
  const [show, setShow] = useState()

  //``` Execute function to load data from API
  useEffect(() => {
    const interval = setInterval(() => {
      getLivingRoomData()
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  //``` Display alert if temperature and smoke value is high
  useEffect(() => {
    if (Object.values(living) != null) {
      if (Object.values(living)[1] > 35 || Object.values(living)[0] > 80) {
        setShow(true)
      }
    }
  }, [living])

  const handleCancel = (living) => {
    const data = {
      temperature: parseInt(Object.values(living)[1]),
      smoke: parseInt(Object.values(living)[0]),
      status: "False"
    };
    feedbackServer(data)
    setShow(false)
  }


  const handleConfirm = (living) => {
    const data = {
      temperature: parseInt(Object.values(living)[1]),
      smoke: parseInt(Object.values(living)[0]),
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
          There is a fire occurs in your Living Room. Is that correct?
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
    living: liveData.livingRoomData
  }
}


//``` Connect to Redux store and retrive the function which handle the desired API call
const mapDispatchToProps = {
  getLivingRoomData,
  feedbackServer
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertLivingRoom)
