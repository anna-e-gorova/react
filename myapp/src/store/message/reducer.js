import { SEND_MESSAGE, CREATE_KEY, REM_KEY } from "./actionTypes";
import { AUTHORS } from "../../constants";

const initialState = {
  chat1: [{ text: "DummyGER", author: AUTHORS.human, id: "chat1-1" }],
  chat2: [{ text: "this is chat 2", author: AUTHORS.human, id: "chat2-1" }],
  chat3: [],
};

export const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_KEY: {
      return {
        ...state,
        [payload.chatId]: [],
      };
    }
    case REM_KEY: {
      delete state[payload.chatId];
      return state;
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };
    }
    default:
      return state;
  }
};
