import React from 'react';
import './postside.css'
import Postshare from './postshare/Postshare'
import Posts from './posts/Posts';

const Postside = () => {
    return (
        <div className='postside'>
            <Postshare/>
            <Posts/>
        </div>
    );
}

export default Postside;
