import "./App.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "./components/MessageList";
import { Form } from "./components/Form";
import { AUTHORS } from "./constants";
import { ListChats } from "./components/ListChats";


function App() {

  const [messages, setMessages] = useState([]);
  const chats = [{name:"Brunch this weekend?", id:Date.now()}, {name:"Summer BBQ", id:Date.now()+1}, {name:"Oui Oui", id:Date.now()+2}];

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [messages]);


  return (
    <div className="App-header">
        <ListChats chats={chats} />
      <div>
        <Form onSendMessage={handleSendMessage} />
        <MessageList messages={messages} />
      </div>

    </div>
  );
}

export default App;
