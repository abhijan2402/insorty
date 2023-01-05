import { useState } from "react";

const commentForm = {
  comment: "",
};

const useComment = () => {
  const [commentState, setCommentState] = useState([commentForm]);

  const handleChangeComment = (event) => {
    const commentHandel = commentState.map((comment) => {
      return Object.assign(comment, {
        [event.target.name]: event.target.value,
      });
    });
    setCommentState(commentHandel);
  };
  const handelSubimtComment = (e) => {
    const handelComment = Object.assign({}, commentState);
    console.log(handelComment);
    
  };

  return {
    commentState,
    handelSubimtComment,
    handleChangeComment,
  };
};

export default useComment;
