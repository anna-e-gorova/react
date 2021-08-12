import React, { useCallback } from "react";
import { Message } from "../Message";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import { AUTHORS } from "../../constants";

export const MessageList = ({ messages  }) => {
  const name = useSelector(selectName);
  const renderMessage = useCallback(
    (mess) => (
      <Message
        text={mess.text}
        author={mess.author === AUTHORS.human ? name : mess.author}
        key={mess.id}
      />
    ),
    []
  );

  return messages.map(renderMessage);
};
