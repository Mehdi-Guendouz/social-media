import React from 'react'
import "./home.css"
import Profileslide from "../../component/Profileslide/Profileslide"
import Postside from "../../component/postside/Postside"
import Rightside from '../../component/rightSide/Rightside'

const Home = () => {
  return (
    <div className='home'>
        <Profileslide/>
        <Postside/>
        <Rightside/>
    </div>
  )
}

export default Home