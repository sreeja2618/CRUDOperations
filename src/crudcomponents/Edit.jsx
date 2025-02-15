import React, { useEffect, useState } from 'react'
import { Link ,useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import Home from "./Home"
import {toast} from "react-toastify"
import "./Create.css"

const Edit = () => {
  const[name,setname]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const navigate=useNavigate();
  const data=useParams();
  useEffect(()=>{
    axios.get("http://localhost:8000/users/"+data.userId)
    .then(res=>{
      // console.log(res);
      setname(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    }).catch(err=>console.log(err))
  },[])

  
let handleSubmit=(e)=>{
  e.preventDefault();
  // console.log(name,email,phone)
  let payload={name,email,phone}
  axios.put("http://localhost:8000/users/"+data.userid,payload)
  .then(res=>{
    toast.success("Updates");
    navigate("/");
  })
  .catch(err=>{
    toast.error("error");
    
  })
  
}
  
  return (
    <div className="formBlock">
      <h1 style={{color:"dodgerblue"}}>Update user</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={name} onChange={(e)=>{
          setname(e.target.value)
        }} ></input><br/><br/>
        <input type="email" placeholder="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}></input><br/><br/>
        <input type="tel" placeholder="phone" maxLength={10} value={phone} onChange={(e)=>{
          setPhone(e.target.value)
        }}></input><br/><br/>
        <Link to="/" element={<Home/>}/>
        <input type="submit" value="update user"/>
        <br/>
        <br/>
        
        <Link to="/" className="BackHome">Back to Homepage</Link>
        
        
      </form>
    </div>
  )
}

export default Edit