import React from 'react';
import cover from '../../../img/cover.jpg'
import profile from '../../../img/profileImg.jpg'
import './profilecard.css'

const ProfileCard = () => {

    const profilepage = true
    return (
        <div className='ProfileCards'>
            <div className="profileImg">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="profilename">
                <span>Mehdi</span>
                <span>front end web devalopper</span>
            </div>
            <div className="followers">
                <hr />
                <div>
                    <div className="follow">
                        <span>2424</span>
                        <span>followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>55</span>
                        <span>followers</span>
                    </div>
                    {profilepage && (
                        <>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>25</span>
                            <span>post</span>
                        </div>
                        </>
                    )}
                </div>
                <hr />
            </div>

            {profilepage ? '': <span>My Profile</span>}
            
        </div>
    );
}

export default ProfileCard;
