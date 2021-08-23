import React from "react";
import { List, ListItem } from "@material-ui/core";
import { withThemeContext } from "../Message";
import { AddChat } from "./AddChat";
import { Chat } from "../Chat"

const Chats = ({ chats, theme }) => {
  return (
    <>
      <button onClick={theme.changeTheme}>CHANGE COLOR</button>
      <List>
        {Object.values(chats).map((c) => (
            <Chat name={c.name} id={c.id} key={c.id} ></Chat>
        ))}
        <ListItem>
          <AddChat />
        </ListItem>
      </List>
    </>
  );
};

export const ChatList = withThemeContext(Chats);
