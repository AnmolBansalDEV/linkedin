import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { userSelect } from './features/userSlice'
function Sidebar() {

  const {displayName, email, photoURL} = useSelector(userSelect)

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://media.licdn.com/dms/image/C5616AQEesazwmMBlBQ/profile-displaybackgroundimage-shrink_350_1400/0/1631122847297?e=1689206400&v=beta&t=Ns_FROb357xe0OnyJ-GK50sQA_zDOkOmIsGdFaV2Hz0" alt="" />
            <Avatar src={photoURL} className='sidebar__avatar' />
            <h3>{displayName}</h3>
            <h4>{email}</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who's viewed your profile</p> 
            <p className='sidebar__statNumber'>4023</p>
          </div>
          <div className="sidebar__stat">
            <p>Impressions of your post</p>
            <p className='sidebar__statNumber'>3282</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("programming")}
          {recentItem("javascript")}
          {recentItem("react")}
          {recentItem("hiring")}
          {recentItem("startup")}

        </div>
    </div>
  )
}

export default Sidebar