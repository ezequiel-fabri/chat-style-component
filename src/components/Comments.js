import React from "react";
import ChatComment from "./ChatComment";

const Comments = ({ comments }) => {
  return (
    <div className="scrolleable">
      {comments.map((comment, index) => {
        return (
          <ChatComment
            key={index}
            comment={comment.comment}
            date={comment.date}
          />
        );
      })}
    </div>
  );
};

export default Comments;
