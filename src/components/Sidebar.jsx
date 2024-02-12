import React from 'react'
import { Avatar } from "@mui/material";
import "../style/sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/UserReducer';
const Sidebar = () => {

  const user = useSelector(selectUser);
  return (
    <div className='sidebar'>
        <div className="sidebar-profile-box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1mBjaFs9tfgbgX44POfJ6OyC3iVdipiiR1FN2gKEqw&s"
          alt=""
        />
        <Avatar className="sidebarAvatar" src=''>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
       <div className="sidebarStats">
        <div className="topSidebarStats">
          <p>Who viewed your profile</p>
          <p className="sidebarStat_num">2,500</p>
        </div>
        <div className="topSidebarStats">
          <p>Who viewed your post</p>
          <p className="sidebarStat_num">110</p>
        </div>
        <div className="topSidebarStats">
          <p>Your connections</p>
          <p className="sidebarStat_num">254</p>
        </div>
       </div>
       <div className="sidebar-activity">
        <h3>Recents</h3>
        <div className="sidebar-items">
        <span>#</span>
        <p>html</p>
        </div>
        <div className="sidebar-items">
        <span>#</span>
        <p>css & tailwind & bootstrap</p>
        </div>
        <div className="sidebar-items">
        <span>#</span>
        <p>javascript</p>
        </div>
        <div className="sidebar-items">
        <span>#</span>
        <p>react js</p>
        </div>
        <div className="sidebar-items">
        <span>#</span>
        <p>git & github</p>
        </div>
        <div className="sidebar-items">
        <span>#</span>
        <p>front end developer</p>
        </div>
       </div>
    </div>
  )
}

export default Sidebar