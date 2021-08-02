import "./Chats.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { func } from "prop-types";


let initialChats = {
  chat1: {
    messages: [{ text: "Dummy", author: AUTHORS.human, id: "chat1-1" }],
    name: "Chat 1",
    id: "chat1",
  },
  chat2: {
    name: "Chat 2",
    id: "chat2",
    messages: [
      { text: "this is chat 2", author: AUTHORS.human, id: "chat2-1" },
    ],
  },
  chat3: { name: "Chat 3", id: "chat3", messages: [] },
};

export function Remchat (e) {
  //console.log(e);
  //initialChats = {};
}



function Chats() {
  const { chatId, chatDel } = useParams();
  const [chats, setChats] = useState(initialChats);

  if (chatDel === "del"){
    let delChatId = Object.keys(chats).find(el => el === chatId);
    delete chats[delChatId];
   
  }

  const handleSendMessage = useCallback(
    (newMessage) => {
      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage],
        },
      });
    },
    [chats, chatId]
  );

  useEffect(() => {
    if (
      !chatId ||
      !chats[chatId]?.messages.length ||
        chats[chatId].messages[chats[chatId].messages.length - 1].author ===
          AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      handleSendMessage(newMessage);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [chats]);

  const verifyChatId = (chatId) => {
    for (let i in chats) {      
        if (i === chatId) {
          return true;
        }    
    }
          return false;
  }

  const addChat = () => {
    const newChatId = Object.keys(chats).length + 1;
    setChats({
      ...chats,
      [`chat${newChatId}`]: { name: `Chat ${newChatId}`, id: `chat${newChatId}`, messages: [] },
    });
  }

  return (
    <div className="root">
      <Button onClick={addChat}>Add Chat</Button>
      <ChatList chats={chats} />
      {!!chatId && verifyChatId(chatId) && (
        <div>
          <MessageList messages={chats[chatId].messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
      
    </div>
  );

}

export default Chats;
