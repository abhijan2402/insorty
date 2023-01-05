import React from "react";

const Comment = ({ handleCommentChange, commentState }) => {
  return (
    <section
      style={{
        wdith: "100%",
      }}
    >
      <textarea
        className="textarea textarea-accent"
        placeholder="Write your comment here..."
        name="comment"
        typeof="text"
        value={commentState.comment}
        onClick={(e) => handleCommentChange(e)}
        style={{
          width: "80%",
          height: "150px",
        }}
      ></textarea>
    </section>
  );
};

export default Comment;
