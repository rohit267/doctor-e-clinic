import React from 'react';
import CSS from './index.module.css';
import { getTime } from '../../utility/helperFunctions';
import { FiVideo, FiPhone } from 'react-icons/fi';

function TextBubble(props) {
  return (
    <>
      <div className={[CSS.TextBubble, props.right ? CSS.Right : CSS.Left].join(' ')}>
        <span className={CSS.Msg}>{props.message}</span>
        <span className={CSS.Time}>{getTime(props.time)}</span>
      </div>
      <br />
      <br />
      <br />
      {/* <br /> */}
    </>
  );
}

function FileBubble(props) {
  return (
    <>
      <div className={[CSS.TextBubble, props.right ? CSS.Right : CSS.Left].join(' ')}>
        <span className={CSS.Msg}>File: {props.fileName}</span>
        <span className={CSS.Time}>{getTime(props.time)}</span>
      </div>
      <br />
      <br />
      <br />
      {/* <br /> */}
    </>
  );
}

function AudioBubble(props) {
  return (
    <>
      <div className={[CSS.AudioBubble, props.right ? CSS.Right : CSS.Left].join(' ')}>
        <span className={CSS.Bold}>
          Audio call invite <FiPhone className={CSS.Pointer} size="1.5em" />
        </span>
        <span className={CSS.TimeAudio}>{getTime(props.time)}</span>
        <br />
        <div className={CSS.DarkRound}>
          <span>{props.state === 'ended' ? 'Ended in 01h25m03s' : 'You missed'}</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

function VideoBubble(props) {
  return (
    <>
      <div className={[CSS.AudioBubble, props.right ? CSS.Right : CSS.Left].join(' ')}>
        <span className={CSS.Bold}>
          Video call invite <FiVideo className={CSS.Pointer} size="1.5em" />
        </span>
        <span className={CSS.TimeAudio}>{getTime(props.time)}</span>
        <br />
        <div className={CSS.DarkRound}>
          <span>{props.state === 'ended' ? 'Ended in 01h25m03s' : 'You missed'}</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export { TextBubble, AudioBubble, VideoBubble, FileBubble };
