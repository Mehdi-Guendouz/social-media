import React from 'react'
import './profileleft.css'
import Logosearch from '../Profileslide/Logosearch.jsx'
import Followerscard from '../Profileslide/followersCord/Followerscard'
import Infocard from '../InfoCard/InfoCard'

function ProfileLeft() {
  return (
    <div className="profileLeft">
      <Logosearch/>
      <Infocard/>
      <Followerscard/>
    </div>
  )
}

export default ProfileLeft