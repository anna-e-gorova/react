import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import "./Chat.css";
import { RemChat } from "./RemChat";

export const Chat = ({ name, id }) => (

<ListItem alignItems="flex-start" >
  <ListItemAvatar>
    <Avatar />
  </ListItemAvatar>
  <Link to={`/chats/${id}`}>
  <ListItemText
    primary={name}
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={"inline"}
          color="textPrimary"
        >
          Sandra Adams
        </Typography>
        {' — Do you have Paris recommendations? Have you ever…'}
      </React.Fragment>
    }
  />
  </Link>
    <RemChat id={id} />
</ListItem>

);


