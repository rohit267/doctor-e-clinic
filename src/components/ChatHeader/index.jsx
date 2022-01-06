import React from 'react';
import CSS from './index.module.css';
import { FiVideo, FiPhone } from 'react-icons/fi';

function index(props) {
  return (
    <div className={CSS.ChatHeader}>
      <span className={CSS.ChatName}>{props.name}</span>
      <div className={CSS.VoiceVideo}>
        <FiVideo className={CSS.Pointer} size="1.5em" />
        <FiPhone className={CSS.Pointer} size="1.5em" />
      </div>
    </div>
  );
}

export default index;
