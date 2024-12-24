import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="Movie Poster"
        />
      </div>
      <form className=" w-3/12  absolute my-28 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-90">
        <h1 className="text-3xl py-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-3 my-2 px-2 w-full rounded-sm bg-gray-700 bg-gray-700 bg-opacity-20 border border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="py-3 my-2 px-2 w-full rounded-sm bg-gray-700 bg-gray-700 bg-opacity-20 border border-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="py-3 px-2  my-2 w-full rounded-sm bg-gray-700 bg-opacity-20 border border-gray-500"
        />
        <button className="p-2 my-3 font-bold bg-red-600 w-full rounded-lg  ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-semibold cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to NetFlix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
