import React, { useState } from "react";
import { login } from "../feature/UserReducer";
import LoginHeader from "./LoginHeader";
import "../style/login.css";
import { auth } from "../backend/Firebase";
import { useDispatch } from "react-redux";
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const register = () =>{
      if (!name) {
        return alert("Please enter valid name.")
      }

      auth.createUserWithEmailAndPassword(email , password)
      .then((userAuth) =>{
        userAuth.user.updateProfile({
          displayName: name,
        })
        .then(() =>{
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name
          }))
        })
      }).catch((e)=> alert(e))
  }

  const loginToApp = (e) =>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email , password).then((userAuth) =>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName
        }))
      })
      .catch((error) => alert(error))
  }
  return (
    <div className="login">
        <LoginHeader/>
      <div className="login-page">
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        <form className="login-inputPage">
          <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Enter name" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Passwords"/>
          <button type="submit" className="signBtn" onClick={loginToApp}>Sign in</button>
          </form>
        <div className="newUser">
            <p>New to Linkedin?</p>
            <button className="newUserJoinBtn" onClick={register}>Join now</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
