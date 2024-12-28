import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggeleGptSearchView } from "../utils/gptSlice";
import { addLanguages } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName || "Guest",
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    const result = dispatch(toggeleGptSearchView());
    console.log("gpt clicked..", result);
  };

  const handleLanguage = (e) => {
    dispatch(addLanguages(e.target.value));
  };

  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 gap-2">
          {showGptSearch && (
            <select
              className="p-2 text-white bg-gray-900 m-2"
              onChange={handleLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          {
            <button
              onClick={handleSearch}
              className="bg-purple-800 text-white py-2 px-4 my-2 rounded-lg cursor-pointer"
            >
              {showGptSearch ? "HomePage" : "GPT Search"}
            </button>
          }
          <img
            className="w-12 h-12 rounded"
            src={user.photoURL}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold bg-neutral-500 text-white rounded-lg my-2"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
