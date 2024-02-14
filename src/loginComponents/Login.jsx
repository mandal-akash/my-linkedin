import React, { useState } from "react";
import { login } from "../feature/UserReducer";
import LoginHeader from "./LoginHeader";
import "../style/login.css";
import { auth } from "../backend/Firebase";
import { useDispatch } from "react-redux";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [action, setAction] = useState("Login");

  const dispatch = useDispatch();

  const register = () => {
    setAction("Sign in")
    if (!name) {
      return console.log("Please enter valid name.");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          });
      })
      .catch((e) => alert(e));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    setAction("Login");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <LoginHeader />
      <div className="login-page">
        <h2>{action}</h2>
        <p>Stay updated on your professional world</p>
        <div className="login-inputPage">
          {action==='Login'?<div></div>:<input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Passwords"
          />
          <div className="linkedin-btn">
            <button type="submit" className="signBtn" onClick={loginToApp}>
              Login
            </button>
            <button className="newUserJoinBtn" onClick={register}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
