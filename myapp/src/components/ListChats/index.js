import React, { useCallback } from "react";
import { Chat } from "../Chat";
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

export const ListChats = ({ chats }) => {
  const renderChats = useCallback((chat) => (
      <Chat name={chat.name} key={chat.id} />
  ), []);

  const classes = useStyles();
  return (
    <List className={classes.root}>{chats.map(renderChats)}</List> )

}