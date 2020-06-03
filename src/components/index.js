import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
const useStyles = makeStyles(styles);

// this component will probably receive some props to keep the state of the chat

const ChatComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ChatHeader />
      <ChatContent />
    </div>
  );
};

export default ChatComponent;
