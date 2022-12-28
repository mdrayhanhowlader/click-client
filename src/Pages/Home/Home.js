import React from "react";
import Profile from "./Profile";
import SideNav from "./SideNav";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-4 gap-4">
        <div>
          <Profile></Profile>
        </div>
        <div className="col-span-2">
          <Timeline></Timeline>
        </div>
        <div>
          <SideNav></SideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
