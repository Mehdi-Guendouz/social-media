 import React , {useState} from 'react'
 import './rightside.css'
 import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Trendsect from './Trendsect';
import ShareModel from '../shareModel/ShareModel';


 
 function Rightside() {
  const [modalOpend,setModalOpened] = useState(false)
  
  function importmodel(){
    setModalOpened((prev)=>!prev)
  }
   return (
     <div className='rightside'>
        <div className="navicons">
            <img src={Home} alt="" />
            <img src={Noti} alt="" />
            <span>setting</span>
            <img src={Comment} alt="" />
        </div>
        <Trendsect/>
        <button className='btn sh-btn' onClick={importmodel}>Share</button>
        <ShareModel modalOpened={modalOpend} setModalOpened={setModalOpened}/>
     </div>
   )
 }
 
 export default Rightside