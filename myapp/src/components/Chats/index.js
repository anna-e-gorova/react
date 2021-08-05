import "./Chats.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";


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

function Chats() {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);

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

   const addChat = () => {
    const newChatId = Object.keys(chats).length + 1;
    setChats({
      ...chats,
      [`chat${newChatId}`]: { name: `Chat ${newChatId}`, id: `chat${newChatId}`, messages: [] },
    });
  }

  const remChat = (chatId) => {
    const tmpChat = {...chats};
    let delChatId = Object.keys(tmpChat).find(el => el === chatId);
    delete tmpChat[delChatId];

    setChats({...tmpChat});
  }

  return (
    <div className="root">
      <Button onClick={addChat}>Add Chat</Button>
      <ChatList chats={chats} remChat={remChat} />
      {!!chats[chatId] && (
        <div>
          <MessageList messages={chats[chatId].messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
      
    </div>
  );

}

export default Chats;
