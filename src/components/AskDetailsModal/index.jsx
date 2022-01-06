import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AskDetailsModal(props) {

  function toggle() {
    props.setModal(!props.modal);
  }
  return (
    <div>
      <Modal isOpen={props.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter new chat user name</ModalHeader>
        <ModalBody>
            <input value={props.newChatName} onChange={props.newChatNameChange} className='form-control' type="text" placeholder="Enter new chat user name" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.startNewChat}>
            Start chat
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AskDetailsModal;
