import React, { useState } from "react";
import {Login_Modal, Signup_Alert} from "./Modals";

const Registration = ({ login, handleLogin, handleSubmit, cred, error, Signin_userState, Signup_userState }) => {
  return (
    <>
      <main className="w-full flex items-center justify-center h-screen min-h-full bg-white">
        <div className="flex flex-col justify-center items-center shadow-md p-8 w-full mx-2 md:mx-auto md:p-6 md:w-[22%] md:min-h-[44%] rounded border-2">
          <h1 className="text-2xl font-bold ">
            {login ? <span>Login</span> : <span>Signup</span>}
          </h1>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-1 ">
              {!login && (
                <>
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border px-0.5 py-1.5 rounded-md placeholder:px-1.5 ring-1 outline-blue-700"
                    value={cred.fullname}
                    onChange={(e) => cred.setFullName(e.target.value)}
                  />
                </>
              )}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="yourname@example.com"
                className="border px-0.5 py-1.5 rounded-md placeholder:px-1.5 ring-1 outline-blue-700"
                value={cred.email}
                onChange={(e) => cred.setEMail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="border px-0.5 py-1.5 rounded-md placeholder:px-1.5 ring-1 outline-blue-700"
                value={cred.password}
                onChange={(e) => cred.setPassword(e.target.value)}
              />
              {!login && (
                <>
                  <label htmlFor="Confirm password"> Confirm Password</label>
                  <input
                    type="password"
                    placeholder="**********"
                    className="border px-0.5 py-1.5 rounded-md placeholder:px-1.5 ring-1 outline-blue-700"
                    value={cred.confirmPassword}
                    onChange={(e) => cred.setConfirmPassword(e.target.value)}
                  />
                </>
              )}
              {error && <p className="text-red-500">{error}</p>}
              <button className="bg-blue-500  w-full rounded font-semibold   py-2  hover:bg-blue-600 active:bg-blue-200">
                {login ? <h1>Login</h1> : <h1>Signup</h1>}
              </button>
            </form>
          </div>
          {login ? (
            <p className="mt-2">
              Don't have an Account?{" "}
              <span
                onClick={handleLogin}
                className="text-indigo-800 font-semibold cursor-pointer"
              >
                Signup
              </span>{" "}
            </p>
          ) : (
            <p className="mt-2">
              Already regiested?{" "}
              <span
                onClick={handleLogin}
                className="text-indigo-800 font-semibold cursor-pointer"
              >
                Login
              </span>
            </p>
          )}
        </div>
        <Signup_Alert signup_result = {Signup_userState}/>
        <Login_Modal userState = {Signin_userState} />
      </main>
    </>
  );
};

export default Registration;
