import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className=" py-6 font-semibold text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white  border text-black border-white rounded-lg p-2 px-12 text-xl hover:opacity-80">
          ▶️Play
        </button>
        <button className=" mx-2 bg-neutral-500 text-white  border border-white rounded-lg p-2 px-12 text-xl bg-opacity-35">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
