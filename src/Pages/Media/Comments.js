import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [comments]);

  const allComments = comments.filter((cm) => cm.postId === post._id);
  console.log(allComments);
  return (
    <div>
      {allComments?.map((comment) => (
        <p>{comment.comment}</p>
      ))}
    </div>
  );
};

export default Comments;
