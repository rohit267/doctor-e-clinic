import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import ChatScreen from '../components/ChatScreen';
import dummyChat from '../utility/dummyChat';

function Homepage() {

  const [convoList, setConvoList] = React.useState(dummyChat);
  
  return (
    <Layout>
      <Navbar />
      <ChatScreen convo={convoList} />
    </Layout>
  );
}

export default Homepage;
