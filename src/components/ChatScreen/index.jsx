import React, { useEffect, useRef } from 'react';
import { Row } from 'reactstrap';
import Sidebar from '../Sidebar';
import Chatbox from '../Chatbox';
import CSS from './index.module.css';
import AskDetailsModal from '../AskDetailsModal';

function ChatScreen(props) {
  const [selectedConvo, setSelectedConvo] = React.useState(props.convo[0]);
  const [allConvos, setAllConvos] = React.useState([]);
  const [selectedConvoIndex, setSelectedConvoIndex] = React.useState(0);
  const [chatMsg, setChatMsg] = React.useState('');
  const [newChatName, setNewChatName] = React.useState('');
  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    try {
      let storedChatsString = localStorage.getItem('chats');
      if (storedChatsString) {
        let storedChats = JSON.parse(storedChatsString);
        setSelectedConvo(storedChats[0]);
        setAllConvos(storedChats);
      } else {
        setSelectedConvo(props.convo[0]);
        localStorage.setItem('chats', JSON.stringify(props.convo));
        setAllConvos(props.convo);
      }
    } catch (e) {
      console.log(e);
    }
    document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
  }, []);

  function handleChatSelect(mIndex) {
    setSelectedConvoIndex(mIndex);
    let oldChats = JSON.parse(localStorage.getItem('chats'));
    setSelectedConvo(oldChats[mIndex]);
  }

  function handleChatMsgChange(e) {
    setChatMsg(e.target.value);
  }

  function handleSend(e) {
    if (chatMsg.length > 0) {
      let newMsgObject = {
        type: 'text',
        msg: chatMsg,
        timestamp: Date.now(),
        sentBy: 'user',
        read: false,
      };
      let oldChats = JSON.parse(localStorage.getItem('chats'));
      oldChats[selectedConvoIndex].messages.push(newMsgObject);
      setSelectedConvo(oldChats[selectedConvoIndex]);
      localStorage.setItem('chats', JSON.stringify(oldChats));
      setChatMsg('');
      setTimeout(() => {
        document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setAllConvos(oldChats);
    }
  }

  function handleNewChatNameChange(e){
    setNewChatName(e.target.value);
  }

  function handleStartNewChat(e){
    if(newChatName.length > 0){
      let newConvo = {
        name: newChatName,
        messages: [{
          type: 'text',
          msg: 'Welcome to the chat',
          timestamp: Date.now(),
          sentBy: 'doctor',
        }],
      };
      let oldChats = JSON.parse(localStorage.getItem('chats'));
      oldChats.push(newConvo);
      setSelectedConvo(newConvo);
      localStorage.setItem('chats', JSON.stringify(oldChats));
      setAllConvos(oldChats);
      setNewChatName('');
      setModal(false);
    }
  }

  function handleFileSelect(e){
    let file = e.target.files[0];
    let newMsgObject = {
      type: 'file',
      fileName: file.name,
      timestamp: Date.now(),
      sentBy: 'user',
      read: false,
    };
    let oldChats = JSON.parse(localStorage.getItem('chats'));
    oldChats[selectedConvoIndex].messages.push(newMsgObject);
    setSelectedConvo(oldChats[selectedConvoIndex]);
    localStorage.setItem('chats', JSON.stringify(oldChats));
    setChatMsg('');
    setTimeout(() => {
      document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setAllConvos(oldChats);
    //read file to base64
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result;
      newMsgObject.base64 = base64;
      let oldFiles = localStorage.getItem('files');
      if(oldFiles){
        oldFiles = JSON.parse(oldFiles);
        oldFiles.push({
          fileName: file.name,
          base64: base64,
        });
        localStorage.setItem('files', JSON.stringify(oldFiles));
      }
      else{
        localStorage.setItem('files', JSON.stringify([{
          fileName: file.name,
          base64: base64,
        }]));
      }

    };
    
  }

  return (
    <Row className={CSS.ChatScreen}>
      <Sidebar openNewChat={()=>setModal(true)} chatIndex={selectedConvoIndex} changeSelectedIndex={handleChatSelect} convo={allConvos} />
      <Chatbox
        ChatSend={handleSend}
        ChatMsg={chatMsg}
        ChatMsgChange={handleChatMsgChange}
        name={selectedConvo.name}
        messageArray={selectedConvo.messages}
        chatIndex={selectedConvoIndex}
        changeSelectedIndex={setSelectedConvoIndex}
        selectFile={handleFileSelect}
      />
      <AskDetailsModal setModal={setModal} startNewChat={handleStartNewChat} modal={modal} newChatName={newChatName} newChatNameChange={handleNewChatNameChange}  />
    </Row>
  );
}

export default ChatScreen;
