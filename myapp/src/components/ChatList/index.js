import React from "react";
import { List } from "@material-ui/core";
import { Chat } from "../Chat";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

export const ChatList = ({ chats, remChat }) => {
  const classes = useStyles();  
  
  return (
    <List className={classes.root}>
      {Object.values(chats).map((c) => (
          <Chat name={c.name} id={c.id} key={c.id} remChat={remChat}></Chat>
      ))}
    </List>
  );
};
