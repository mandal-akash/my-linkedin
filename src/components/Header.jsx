import React from "react";
import HeaderOption from "./HeaderOption";
import "../style/header.css";
import { useDispatch } from "react-redux";
import { logout } from "../feature/UserReducer";
import { auth } from "../backend/Firebase";
const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () =>{
      dispatch(logout());
      auth.signOut();
  }
  return (
    <div className="header">
      <div className="left-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG1u4nLnAEwcuByyVMs6MsDp9leB5Omeh0w&usqp=CAU"
          alt=""
        />
        <div className="searchBox">
          <form>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
      <div className="header-right">
        <HeaderOption icon={<i className="fa-solid fa-xl fa-house-chimney syle"></i>} title="Home"/>
        <HeaderOption icon={<i className="fa-solid fa-user-group fa-xl"></i>} title="My network"/>
        <HeaderOption icon={<i className="fa-solid fa-briefcase fa-xl"></i>} title="Jobs"/>
        <HeaderOption icon={<i className="fa-solid fa-comment-dots fa-xl"></i>} title="Message"/>
        <HeaderOption icon={<i className="fa-solid fa-bell fa-xl"></i>} title="Notification"/>
        <HeaderOption avatar={true} title="Me" onclick={logoutOfApp}/>
      </div>
    </div>
  );
};

export default Header;
