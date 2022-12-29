import moment from "moment/moment";
import React, { useContext, useState } from "react";
import { AuthContext } from "./../../contexts/AuthProvider";
import Comments from "./Comments";
import { BiLike } from "react-icons/bi";

const MediaCard = ({ post }) => {
  const [like, setLike] = useState();
  const { user } = useContext(AuthContext);
  console.log(post);
  const time = moment().format("MM Do YYYY, h:mm:ss a");
  console.log(time);

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const data = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      comment,
      time,
      postId: post._id,
    };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   handle like
  const handleLike = () => {};
  return (
    <div>
      <div className="rounded-md shadow-md w-4/5 bg-gray-50 text-gray-800 mx-auto">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <img
              src="https://source.unsplash.com/50x50/?portrait"
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                leroy_jenkins72
              </h2>
              <span className="inline-block text-xs leading-none dark:text-gray-400">
                Somewhere
              </span>
            </div>
          </div>
          <button title="Open options" type="button"></button>
        </div>
        <p>{post.text}</p>
        <div className={`${post.img ? "block" : "hidden"}`}>
          <img
            // src="https://source.unsplash.com/301x301/?random"
            src={post.img}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleLike(post._id)}
                type="button"
                title="Like post"
                className="flex items-center justify-center"
              >
                <BiLike className="text-3xl" />
              </button>
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              ></button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              ></button>
            </div>
            <button
              type="button"
              title="Bookmark post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div>
              <span className="text-sm">
                Liked by
                <span className="font-semibold">Mamba UI</span>and
                <span className="font-semibold">86 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
            </p>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-gray-800"
                name="comment"
              />
              <input type="submit" value="" />
            </form>
            <Comments post={post}></Comments>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
