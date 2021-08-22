import { SEND_MESSAGE, CREATE_KEY, REM_KEY } from "./actionTypes";
import { AUTHORS } from "../../constants";

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

export const createKey = (chatId) => ({
  type: CREATE_KEY,
  payload: {
    chatId,
  },
});

export const remKey = (chatId) => ({
  type: REM_KEY,
  payload: {
    chatId,
  },
});

let timeout;
export const sendMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(sendMessage(chatId, message));

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    dispatch(
      sendMessage(chatId, { author: AUTHORS.robot, text: "Message from thunk", id: Date.now() })
    );
  }, 1000);
};
