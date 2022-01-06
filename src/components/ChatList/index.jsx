import React from 'react';
import CSS from './index.module.css';

function index(props) {
  return (
    <div onClick={props.onClick} className={[CSS.ChatList, 'd-flex'].join(' ')}>
      <img className={CSS.RoundImg} src="/doc.jpg" />
      <div className={CSS.MidBox}>
        <div className={CSS.MidEle}>
          <span className={CSS.ChatName}>{props.name}</span>
          <br />
          <span className={CSS.LastMsg}>{props.lastMsg}</span>
        </div>
        <div className="text-center pt-2">
          <div className={[CSS.LastMsgTime, props.data === 'Today' ? CSS.Unread : ''].join(' ')}>{props.data}</div>
          <span className={[CSS.NumberOfMsg, props.data !== 'Today' ? 'd-none' : 'd-inline-block'].join(' ')}>3</span>
        </div>
      </div>
    </div>
  );
}

export default index;
