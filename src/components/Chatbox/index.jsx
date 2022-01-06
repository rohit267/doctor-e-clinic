import React from 'react';
import { Col } from 'reactstrap';
import ChatHeader from '../ChatHeader';
import ChatInput from '../ChatInput';
import ConvoBox from '../ConvoBox';

function index(props) {
  return (
    <Col md="8 p-0">
      <ChatHeader name={props.name} />
      <ConvoBox messageArray={props.messageArray} />
      <ChatInput selectFile={props.selectFile} ChatSend={props.ChatSend} ChatMsg={props.ChatMsg} ChatMsgChange={props.ChatMsgChange} />
    </Col>
  );
}

export default index;
