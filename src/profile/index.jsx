import React from "react";
import "./profile.css";
import "../index.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import MainBody from "./component/mainbody";

const ProfileIndex = () => {
  return (
    <div className="flex flex-col  relative scroll-smooth">
      <div className="fixed h-[10vh]  top-0 left-0 navbg z-50">
        <Navbar />
      </div>
      <div className=" mt-[10vh] flex flex-row mainbody ">
        <div className="sidebar background h-[89.7vh] overflow-auto scrollbar-hide">
          <Sidebar />
        </div>
        <div className="w-full   ">
          <div className="p-5 md:h-[89.7vh] overflow-auto scrollbar-hide">
            
            <MainBody />
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileIndex;
