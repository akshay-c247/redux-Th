import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../features/UserSlice'
import { useNavigate } from 'react-router-dom'


const Create = () => {

const [user,setUsers]=useState({})
//const allUser = useSelector((state)=>state.app.users)
const dispatch=useDispatch();
const navigate=useNavigate();

const getUserData=(e)=>{
   
    setUsers({...user,[e.target.name]:e.target.value});
    
}
 
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(user,"user")
    dispatch(createUser(user))
    navigate("/read")
}

  return (
    <div>
      <div>
        <h3 data-testid>Add Your's detail</h3>
      </div>
    
    <form className='w-50 mx-auto my-5' onSubmit={handleSubmit} >
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" name='name' onChange={getUserData}/>
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" name='email'onChange={getUserData}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">age</label>
    <input type="age" className="form-control" name='age'onChange={getUserData} />
  </div>
  <div className="mb-3">
  <input className="form-check-input" type="radio" name='gender' value='Male' onChange={getUserData} />
  <label className="form-check-label" for="flexRadioDefault1">
   Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" type="radio" name='gender' value='Female' onChange={getUserData} />
  <label className="form-check-label" for="flexRadioDefault2">
  Female
  </label>
</div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    
    </div>
  )
}

export default Create;