import React from 'react'
import headerImg from "./assets/header-logo.png"
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import "./Header.css"
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const dispatch = useDispatch()
  const auth = getAuth()
  const logoutOfApp = ()=>{
    dispatch(logout)
    signOut(auth)
  }
  return (
    <div className="header">

      <div className="header__left">

          <img src={headerImg} alt="home" />
          <div className="header__search">
              <SearchIcon />
              <input type="text" placeholder='Search' />
          </div>

      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={GroupIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={SmsIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} onClick={logoutOfApp} title="Logout" />
      </div>

    </div>
  )
}

export default Header