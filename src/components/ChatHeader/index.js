import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const ChatHeader = () => {
  const classes = useStyles();
  return <div className={classes.header}></div>;
};

export default ChatHeader;
