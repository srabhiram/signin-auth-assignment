import React, { useState } from "react";
import Registration from "./components/Registration";
import { signin, signup } from "./firebase/auth";

const Homepage = () => {
  const [login, setLogin] = useState(true);
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [error, setError] = useState("");
  const [Signup_UserState, setSignup_UserState] = useState(false);
  const [Signin_UserState, setSignin_UserState] = useState(false);

  login ? document.title = "Login | Page" : document.title = "Signup | Page"

  const handleLogin = () => {
    setLogin(!login);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!validPassword(password)) {
      setError(
        "Password must be between 8 and 15 characters long, include at least one lowercase letter, one uppercase letter, one digit, and one special character."
      );
      return;
    }

    if (!login && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (login) {
        const result = await signin(email, password);
        if (result) {
          setSignin_UserState(true);
          resetfeilds();
        }
      } else {
        const signup_result = await signup(email, password, fullname);
        if (signup_result) {
            setSignup_UserState(true);
            resetfeilds();
            
        }
        
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const resetfeilds = () => {
    setEMail("");
    setFullName("");
    setPassword("");
    setConfirmPassword("");
  };

  const validPassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;
    return (
      password.length >= 8 &&
      password.length <= 15 &&
      passwordRegex.test(password)
    );
  };

  return (
    <Registration
      login={login}
      handleLogin={handleLogin}
      handleSubmit={handleSubmit}
      cred={{
        fullname,
        setFullName,
        email,
        setEMail,
        setPassword,
        password,
        confirmPassword,
        setConfirmPassword,
      }}
      error={error}
      Signin_userState={Signin_UserState}
      Signup_userState={Signup_UserState}
    />
  );
};

export default Homepage;
