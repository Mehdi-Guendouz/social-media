import React from 'react';
import "./followerscard.css"
import {followers} from '../data/data'

const Followerscard = () => {

    const followersTab = followers.map((follower , id)=>{
        return(
            <div className='follower'>
                <div className="">
                    <img src={follower.img} alt="" className='followerImg' />
                    <div className="name">
                        <span>{follower.name}</span>
                        <span>{follower.username}</span>
                    </div>
                </div>
                <button className='btn fc-btn'>Follow</button>
            </div>
        )
    })

    return (
        <div className='followerscard'>
            {followersTab}
        </div>
    );
}

export default Followerscard;
