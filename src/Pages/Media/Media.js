import React from "react";
import MediaTimeline from "./MediaTimeline";
import Profile from "./../Home/Profile";

const Media = () => {
  return (
    <div className="md:grid md:grid-cols-4 gap-2">
      <div className="hidden md:block">
        <Profile></Profile>
      </div>
      <div className="col-span-2">
        <MediaTimeline></MediaTimeline>
      </div>
    </div>
  );
};

export default Media;
