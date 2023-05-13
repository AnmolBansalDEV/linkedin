import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./HeaderOption.css"
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { userSelect } from './features/userSlice';

function HeaderOption({Icon, title, avatar, onClick}) {
  const user = useSelector(userSelect)
  return (
    <div className="headerOption" onClick={onClick}>
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && <Avatar src={user?.photoURL} className="headerOption__avatar" /> }
        <div className="headerOption__avatarDiv">
            <h3 className='headerOption__title'>{title}</h3>
            {avatar && <ArrowDropDownIcon className='headerOption__downArrow'/>}
        </div>
    </div>
  )
}

export default HeaderOption 