import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languagesConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey]?.placeHolder}
        />
        <button className="py-2 px-2 col-span-3 m-4 bg-red-700 text-white rounded-lg">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
