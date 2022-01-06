import React from 'react';
import { Col } from 'reactstrap';
import CSS from './index.module.css';
import StartNewConvo from '../StartNewConvo';
import ChatList from '../ChatList';
import { getDate } from '../../utility/helperFunctions';

function index(props) {
  return (
    <Col className={CSS.Sidebar} md={4}>
      <StartNewConvo openNewChat={props.openNewChat} css={CSS.NewChat} />
      {props.convo.map((item, index) => {
        // console.log(item);
        return (
          <ChatList
            onClick={() => props.changeSelectedIndex(index)}
            key={index}
            name={item.name}
            data={item.messages[item.messages.length - 1].timestamp ? getDate(item.messages[item.messages.length - 1].timestamp) : ''}
            lastMsg={
              item.messages[item.messages.length - 1].type === 'text'
                ? item.messages[item.messages.length - 1].msg
                : item.messages[item.messages.length - 1].type === 'audio'
                ? 'Audio Call'
                : 'Video Call'
            }
          />
        );
      })}
    </Col>
  );
}

export default index;
