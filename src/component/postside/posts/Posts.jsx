import React from 'react';
import './posts.css'
import {PostsData} from '../../Profileslide/data/postdata';
import SinglePosts from './SinglePosts';

const PostTable = PostsData.map((item, id ) => <SinglePosts data={item} id={id}/>)

const Posts = () => {
    return (
        <div className='posts'>
            {PostTable}
            
        </div>
    );
}

export default Posts;
