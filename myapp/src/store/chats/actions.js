import { ADD_CHAT, REM_CHAT } from "./actionTypes";

export const addChat = (chatId, name) => ({
  type: ADD_CHAT,
  payload: {
    chatId,
    name,
  },
});

export const remChat = (chatId) => ({
  type: REM_CHAT,
  payload: {
    chatId,
  },
});
