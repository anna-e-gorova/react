import "./Chats.css";
import { useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessageWithReply } from "../../store/message/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/message/selectors";

function Chats() {
  const { chatId } = useParams();
  const history = useHistory();

  const chats = useSelector(selectChats);
  
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithReply(chatId, newMessage));
    },
    [chatId]
  );

  if (!!chatId && !chats[chatId]) {
    // return <Redirect to="/nochat" />
    history.replace('/nochat');
  }

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
