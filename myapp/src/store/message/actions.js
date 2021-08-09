import { SEND_MESSAGE, CREATE_KEY, REM_KEY } from "./actionTypes";

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