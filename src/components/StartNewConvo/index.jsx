import React from 'react'
import { RiChatNewFill } from 'react-icons/ri';

function index(props) {
    return (
        <div onClick={props.openNewChat} className={props.css}>
        <span>Start New Conversation</span>
        <RiChatNewFill size="1.5em" />
      </div>
    )
}

export default index
