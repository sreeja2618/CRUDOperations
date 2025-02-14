import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import Home from "./Home"
import {toast} from "react-toastify"

const Create = () => {
  const[name,setname]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const navigate=useNavigate();
  
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(name,email,phone)
  let payload={name,email,phone}
  console.log(payload)
  axios.post("http://localhost:8000/users",payload)
  .then(res=>{
    toast.success("User created")
    navigate("/")
  })
  .catch(err=>{
    toast.error("User not created");
  })
}
  
  return (
    <div>
      <h1 style={{color:"dodgerblue"}}>Create user</h1>
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
        <button className="Submit">Create</button>
        <br/>
        <br/>
        
        <Link to="/" className="BackHome">Back to Homepage</Link>
        
        
      </form>
    </div>
  )
}

export default Create