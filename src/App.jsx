import React, { useEffect } from "react";
import Header from "./components/Header";
import  Login from "./loginComponents/Login";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import { useDispatch, useSelector } from "react-redux";
import { login , logout ,  selectUser } from "./feature/UserReducer";
import { auth } from "./backend/Firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if (userAuth) {
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          }))
      } else {
        dispatch(logout());
      }
    })
  }, [])
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="linkedin-app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
