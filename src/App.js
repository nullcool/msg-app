import { useState } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import ChatWindow from './components/ChatWIndow';

let initialFriends = [{ id: 1, name: "George" }, { id: 2, name: "Helen" }, { id: 3, name: "Sara" }]
let initialMessages = {
  1: [{ from: "George", text: "Hello friend, its George" }],
  2: [{ from: "Helen", text: "Hey" }],
  3: [{ from: "Sara", text: "Hey <3 Its Sara" }]
}

function App() {
  const [friends] = useState(initialFriends);
  const [messages, setMessages] = useState(initialMessages);
  const [selectedFriend, setSelectedFriend] = useState(initialFriends[2]);

  const handleFriendSelect = (friend) => (
    setSelectedFriend(friend)
  );

  const handleMessageSend = (text) => (
    setMessages((prevMsgs) => ({
      ...prevMsgs,
      [selectedFriend.id]: [...prevMsgs[selectedFriend.id], { from: "You", text: text }]
    }))
  )


  return (
    <div className="App">
      <FriendsList friends={friends} onSelectFriend={handleFriendSelect} />
      <ChatWindow friend={selectedFriend} messages={messages[selectedFriend.id]} onSendMessage={handleMessageSend} />
    </div>
  );
}

export default App;
