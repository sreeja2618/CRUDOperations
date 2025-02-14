import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import Home from "./Home"

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
    console.log("Pushed successfully")
    navigate("/")
  })
  .catch(err=>{
    console.log(err);
  })
}
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={name} onChange={(e)=>{
          setname(e.target.value)
        }} ></input><br/>
        <input type="email" placeholder="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}></input><br/>
        <input type="phone" placeholder="phone" value={phone} onChange={(e)=>{
          setPhone(e.target.value)
        }}></input><br/>
        <Link to="/" element={<Home/>}/>
        <button>Signup</button>
        
      </form>
    </div>
  )
}

export default Create