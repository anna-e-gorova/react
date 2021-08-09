import "./Chats.css";
import { useEffect, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../store/message/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/message/selectors";

function Chats() {
  const { chatId } = useParams();

  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessage(chatId, newMessage));
    },
    [chatId]
  );

  useEffect(() => {
    if (
      !chatId ||
      !messages[chatId]?.length ||
      messages[chatId][messages[chatId].length - 1].author ===
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
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="root">
      <ChatList chats={chats} />
      {!!chats[chatId] && (
        <div>
          <MessageList messages={messages[chatId]} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default Chats;
