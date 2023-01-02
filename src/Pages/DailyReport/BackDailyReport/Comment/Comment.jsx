import React from "react";

const Comment = () => {
  return (
    <section>
      <textarea
        className="textarea textarea-accent"
        placeholder="Bio"
        style={{
          width: "80%",
          height: "150px",
        }}
      ></textarea>
    </section>
  );
};

export default Comment;
