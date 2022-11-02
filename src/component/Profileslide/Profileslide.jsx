import React from 'react';
import Logosearch from './Logosearch'
import ProfileCard from './profileCard/ProfileCard'
import FollowersCard from './followersCord/Followerscard.jsx'
import './Profileslide.css'

const Profileslide = () => {
    return (
        <div className='Profileslide'>
            <Logosearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    );
}

export default Profileslide;
