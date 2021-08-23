import { ADD_CHAT, REM_CHAT } from "./actionTypes";

const initialState = {
  chat1: {
    name: "Chat 1",
    id: "chat1",
  },
  chat2: {
    name: "Chat 2",
    id: "chat2",
  },
  chat3: { name: "Chat 3", id: "chat3", },
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        [payload.chatId]: {
          name: payload.name,
          id: payload.chatId,
          messages: [],
        },
      };
    }
    case REM_CHAT: {
      const tmpChat = {...state};
      const delChatId = Object.keys(tmpChat).find(el => el === payload.chatId);
      delete tmpChat[delChatId];
      return {
        ...tmpChat,
      };
    }
    default:
      return state;
  }
};
