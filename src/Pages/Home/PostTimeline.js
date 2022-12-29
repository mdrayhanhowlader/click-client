import React, { useContext } from "react";
import { RiLiveFill } from "react-icons/ri";
import { ImImages } from "react-icons/im";
import { FaSmile } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const PostTimeline = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const postHandler = async (data) => {
    const text = data.ptext;

    console.log(text);

    // file send to imgBB
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const img = await res.json();
    const newImage = img?.data?.url;
    console.log(newImage);

    const post = {
      text,
      img: newImage,
      email: user.email,
    };

    reset();
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(postHandler)}
        className="my-4 rounded-lg shadow-lg border p-4"
      >
        <div className="flex gap-2 my-2">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />

          <textarea
            {...register("ptext", {
              required: "Write something",
            })}
            type="text"
            placeholder="What's on your mind?"
            className="w-full border  p-1 rounded-md"
          />
          <input
            type="submit"
            className="px-4 rounded-md bg-blue-400 hover:bg-blue-500 text-white text-sm"
            value="Post"
          />
        </div>
        <hr className="w-11/12 mx-auto my-4" />
        <div className="flex flex-wrap justify-around items-center gap-4 my-2">
          <div>
            <label for="file-input" className="flex items-center gap-2">
              <RiLiveFill className="text-2xl text-red-600" /> Live video
            </label>
            <input id="file-input" type="file" className="hidden" />
          </div>
          <div>
            <label for="img" className="flex items-center gap-2">
              <ImImages className="text-2xl text-green-600" /> Photo/video
            </label>
            <input
              {...register("image")}
              id="img"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
          <div>
            <label for="file-input" className="flex items-center gap-2">
              <FaSmile className="text-2xl text-orange-400" /> Feelings/activity
            </label>
            <input id="file-input" type="file" className="hidden" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostTimeline;
