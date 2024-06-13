import React, { useState, useEffect } from "react";
import check_mark from "../assets/check-mark.gif";
import { auth } from "../firebase/app";
import { signOut } from "firebase/auth";

export const Signup_Alert = ({ signup_result }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (signup_result) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3500);
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [signup_result]);

  if (!visible) return null;

  return (
    <div className="w-1/2 bg-white absolute top-6  flex flex-row items-center justify-center">
      <img src={check_mark} alt="" className="w-14 mr-2" />
      <p className="text-xl ">Registration successful</p>
    </div>
  );
};

export const Login_Modal = ({ userState }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Open the modal if the userState meets a certain condition
    if (userState) {
      setIsVisible(true);
    }
  }, [userState]);
  const handleSignout = () => {
    signOut(auth).then(() => {
      if (auth?.currentUser === null) {
        alert("Signout Successful");
        setIsVisible(false);
      }
    });
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-6 md:w-1/3 border-2 rounded-md shadow-md">
          <button
            className="absolute top-1 right-2 text-gray-700 hover:text-gray-900 text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="flex flex-col items-center justify-center h-full">
            {/* Modal content goes here */}
            <p className="text-xl">
              Hello{" "}
              <span className="font-mono">
                {auth?.currentUser?.displayName}!
              </span>{" "}
              Succefully Logged into your account. <br /> E-mail id:{" "}
              <span className="font-mono">{auth?.currentUser?.email}</span>
            </p>
            <p className="text-xl"> Enjoy your Day</p>
            <button
              className="mt-2 font-medium px-3 py-2 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-200"
              onClick={handleSignout}
            >
              Signout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
