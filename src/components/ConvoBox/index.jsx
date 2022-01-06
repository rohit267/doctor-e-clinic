import React from 'react';
import CSS from './index.module.css';
import { TextBubble, AudioBubble, VideoBubble, FileBubble } from '../TextBubble';

function index(props) {
  return (
    <div className={CSS.ChatsWrapper}>
      {props.messageArray.map((message, index) => {
        if (message.type === 'text')
          return <TextBubble key={index} message={message.msg} time={message.timestamp} right={message.sentBy === 'user'} />;
        else if (message.type === 'audio')
          return <AudioBubble key={index} time={message.timestamp} state={message.state} right={message.sentBy === 'user'} />;
        else if (message.type === 'video')
          return <VideoBubble state={message.state} key={index} right={message.sentBy === 'user'} time={message.timestamp} />;
        else if (message.type === 'file')
          return <FileBubble key={index} fileName={message.fileName} time={message.timestamp} right={message.sentBy === 'user'} />;
      })}
      <div id='scroll' />
    </div>
  );
}

export default index;
