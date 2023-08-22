import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { updateUser } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const {id} = useParams();
    const[updateData,setUpdateData]=useState();
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const  users = useSelector((state) => state.app.users)
    
    useEffect(() => {
        if (id) {
            console.log(id)
          const singleUser = users.filter((ele) => ele.id === id);
          console.log(singleUser)
          setUpdateData(singleUser[0]);
        }
      }, []);

      const newData = (e)=>{
        setUpdateData({...updateData ,[e.target.name]: e.target.value})
      }
    
      
      console.log("updated data", updateData);

      const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(updateUser(updateData))
        navigate("/read")

      }

    return (
        <div>

            <form className='w-50 mx-auto my-5' onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={updateData && updateData.name} onChange={newData} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' value={updateData && updateData.email} onChange={newData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">age</label>
                    <input type="age" className="form-control" name='age' value={updateData && updateData.age} onChange={newData} />
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" name='gender' value='Male'  checked={updateData && updateData.gender==="Male"} onChange={newData}/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" name='gender' value='Female'  checked={updateData && updateData.gender==="Female"} onChange={newData} />
                    <label className="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Update;