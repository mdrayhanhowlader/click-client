import React, { useEffect, useState } from "react";

const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/comments/${post._id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [comments]);

  // const allComments = comments.filter((cm) => cm.postId === post._id);

  return (
    <div>
      {comments?.map((comment) => (
        <p className="">{comment.comment}</p>
      ))}
    </div>
  );
};

export default Comments;
