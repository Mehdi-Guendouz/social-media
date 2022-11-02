import React , {useState , useRef} from 'react'
import profilepic from '../../../img/profileImg.jpg'
import './postshare.css'


export default function Postshare() {
    const [image , setimage] = useState(null)
    const ImgRef = useRef()

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setimage({
                image: URL.createObjectURL(img),
            })
        }
    }

  return (
    <div className='postshar'>
        <img src={profilepic} alt="" />
        <div>
            <input type="text" placeholder="What's happening" />
            <div className="postoption">
                <div className="option"
                onClick={()=>ImgRef.current.click()}
                >
                    photo
                </div>
                <div className="option">
                    video
                </div>
                <div className="option">
                    location
                </div>
                <div className="option">
                    schedule
                </div>
                <button className='btn ps-share'>Share</button>
                <div>
                    <input type="file" ref={ImgRef} name="myImg" className='hide' onChange={onImageChange} />
                </div>
            </div>
            {image && 
                <div className='prevewimg'>
                    <h1 onClick={()=>{setimage(null)}}>delet</h1>
                    <img src={image.image} alt=""  />
                </div>
            }
        </div>
    </div>
  )
}
