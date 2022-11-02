import React, {useState} from 'react'
import ProfileModal from '../Profilemodel/Profilemodel'
import './infoCard.css'

function InfoCard() {

  const [modalOpend,setModalOpened] = useState(false)
  
  function importmodel(){
    setModalOpened((prev)=>!prev)
  }

  return (
    <div className="infocard">
      <div className="infohead">
        <h4>Your Info</h4>
        <h4 className='pointer' onClick={importmodel}>Edit</h4>
        <ProfileModal modalOpened={modalOpend} setModalOpened={setModalOpened}/>
      </div>
      <div className="info">
        <span className='bold'>statuse </span>
        <span>single</span>
      </div>
      <div className="info">
        <span className='bold'>Lives in </span>
        <span>El milia</span>
      </div>
      <div className="info">
        <span className='bold'>works at </span>
        <span>Null</span>
      </div>
      <button className='btn logout-btn'>Log Out</button>
    </div>
  )
}

export default InfoCard