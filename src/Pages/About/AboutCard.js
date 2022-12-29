import React, { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthProvider";

const AboutCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        {/* banner */}
        <div className="w-full mx-auto h-32 md:h-72 relative md:relative">
          <img
            className="w-full h-full"
            src="https://cdn.pixabay.com/photo/2022/01/24/13/51/temple-6963458__340.jpg"
            alt=""
          />
        </div>
        {/* profile */}
        <div className="w-full mx-auto flex flex-col mb-4 relative bottom-10 justify-center md:flex-row md:justify-start items-center md:w-4/5 md:mx-auto md:absolute md:top-32 md:left-32">
          <div className=" overflow-hidden border-4 rounded-full md:rounded-none border-sky-100">
            <img className="w-32" src={user?.photoURL} alt="" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-semibold md:text-white md:ml-4">
              {user?.displayName}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
