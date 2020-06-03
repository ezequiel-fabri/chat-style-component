import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(styles);

const ChatInput = ({
  handleSubmit,
  inputValue,
  handleChange,
  placeholder = "Escribe aqui",
}) => {
  const classes = useStyles();
  const handleKeyDown = (event) => {
    if (event.keyCode !== 13) return;
    handleSubmit();
  };
  // this example follow a material-ui example structure
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="actions">
        <IconButton className={classes.iconButton}>
          <AttachFileIcon />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          aria-label="directions"
          onClick={handleSubmit}
        >
          <SendIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default ChatInput;
