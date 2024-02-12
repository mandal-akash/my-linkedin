import React from 'react'
import "../style/headerOption.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/UserReducer';
const HeaderOption = ({icon , title , avatar , onclick}) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onclick} className='headerOption'>
        <div className="headerOptionIcons">
            <span className='icons'>{icon}</span>
            {avatar && ( <Avatar className='headerOption_Avatar'>{user.email[0]}</Avatar>)}
            <p>{title}</p>
        </div>
    </div>
  )
}

export default HeaderOption