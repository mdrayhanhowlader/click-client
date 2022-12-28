import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";

const PostTimeline = () => {
  return (
    <div className="border rounded bg-slate-50">
      <div className="text-center mt-4">
        <div>
          <input
            className="rounded-l-3xl pr-4 md:pr-40 pl-2 py-3 border"
            type="text"
            name="post"
            placeholder="write your text"
            id=""
          />
          <input
            className="bg-blue-700 text-white rounded-r-3xl px-8 py-3"
            type="submit"
            value="Post"
          />
        </div>

        <div className="ml-28 mt-2">
          <label htmlFor="img" className="flex items-center">
            <IoIosImages className="fill-blue-600 text-3xl mr-2" />
            <span>Photo</span>
          </label>
          <input
            className="invisible"
            type="file"
            name="image"
            accept="image/*"
            id="img"
          />
        </div>
      </div>
    </div>
  );
};

export default PostTimeline;
