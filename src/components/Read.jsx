import React, { useEffect, useState } from 'react'
import { deleteUser, showUser } from '../features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { Link } from 'react-router-dom';


const Read = () => {
    const dispatch = useDispatch();
    const [id,setId]=useState();
    const [showPopup,setPopup]=useState(false)

    const { users, loading ,searchData } = useSelector((state) => state.app)
    console.log(users, "users")

    useEffect(() => {

        dispatch(showUser());


    }, []);

    if (loading) {
        return <h2>Loading</h2>;
    }



    return (
        
        <div>
           {showPopup && <Modal id={id} showPopup={showPopup} setPopup={setPopup}/> }
            <h2>All Data</h2>
            <div>
                {users && users
                
                .filter((ele) => {
                    if (searchData.length === 0) {
                      return ele;
                    } else {
                      return ele.name
                        .toLowerCase()
                        .includes(searchData.toLowerCase());
                    }
                  })
                
                
                
                
                
                
                .map((ele) => (
                    <div key={ele.id} className="card w-50 mx-auto my-5" >
                        <div className="card-body">

                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                            <p className="card-text">{ele.gender}</p>
                            <button  className="card-link" data-testId ="view"onClick={()=>[setId(ele.id),setPopup(true)]} >view</button>
                            < Link to={`/edit/${ele.id}`} className="card-link" >Edit</Link>
                            <button onClick={()=>dispatch(deleteUser(ele.id))} className="card-link">Delete</button>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default Read;