import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { format } from "date-fns";
import ChatInput from "../ChatInput";
import Comments from "../Comments";
const useStyles = makeStyles(styles);

const ChatContent = () => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  const handleSubmit = () => {
    if (!inputValue) return;
    addComment({
      comment: inputValue,
      date: format(new Date(), "HH:mm - dd/MM/yyyy"),
    });
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={classes.content}>
      <Comments comments={comments} />
      <ChatInput
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        handleChange={handleChange}
        placeholder="Escribí acá tus observaciones."
      />
    </div>
  );
};

export default ChatContent;
