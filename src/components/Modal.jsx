import React from 'react'
import './Modal.css'
import { useSelector } from 'react-redux'

const Modal = ({id,showPopup,setPopup}) => {
    const allusers =useSelector((state)=>state.app.users)
    const singleUser=allusers.filter((ele)=>ele.id===id)
  return (
    <div>
         <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={()=>setPopup(false)}>Close</button>
       <h2>{singleUser[0].name}</h2>
       <h3>{singleUser[0].email}</h3>
       <h4>{singleUser[0].age}</h4>
       <h5>{singleUser[0].gender}</h5>
      </div>
    </div>
    </div>
  )
}

export default Modal;