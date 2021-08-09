import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { createKey } from "../../store/message/actions";

export const AddChat = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }
    
    const newId = `chat-${Date.now()}`;
    dispatch(createKey(newId));
    dispatch(addChat(newId, value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} />
    </form>
  );
};
