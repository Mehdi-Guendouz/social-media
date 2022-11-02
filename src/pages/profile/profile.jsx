import React from 'react'
import Postside from '../../component/postside/Postside'
import ProfileLeft from '../../component/profileLeft/ProfileLeft'
import ProfileCard from '../../component/Profileslide/profileCard/ProfileCard'
import Rightside from '../../component/rightSide/Rightside'
import './profile.css'

function profile() {
  return (
    <div className="profile">
        <ProfileLeft/>
        <div className="ProfileCenter">
          <ProfileCard/>
          <Postside/>
        </div>
        <Rightside/>
    </div>
  )
}

export default profile