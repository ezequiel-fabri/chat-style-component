import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const ChatComment = ({ comment, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.comment}>{comment}</div>
      <span className={classes.description}>{date}</span>
    </div>
  );
};

export default ChatComment;
