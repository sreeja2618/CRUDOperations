import React, { useState } from 'react'

const Dashboard = () => {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[gender,setGender]=useState('');
  const[address,setAddress]=useState('');
  const[file,setFile]=useState('');
  const[country,setCountry]=useState('');
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(username,email,password,gender,address,file,country)
}
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} ></input><br/>
        <input type="email" placeholder="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}></input><br/>
        <input type="password" placeholder="password" value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}></input><br/>
       <label>gender</label>
        <radio value={gender} onChange={(e)=>{
          setGender(e.target.value)
        }}>
          <input type="radio" name="gender"/>Male
          <input type="radio"  name="gender"/>Famale
        </radio>
<br/>
        <textarea type="text" placeholder="address" value={address} onChange={(e)=>{
          setAddress(e.target.value)
        }}></textarea>
        <br/>
        <input type="file" placeholder="file" value={file} onChange={(e)=>{
          setFile(e.target.value)
        }}></input><br/>
        <select value={country} onChange={(e)=>{
          setCountry(e.target.value)
        }}>
          <option>
            India
          </option>
          <option>
            USA
          </option>
          <option>
            Canada
          </option>
        </select>
        <br/>
        <button>Signup</button>
        
      </form>
    </div>
  )
}

export default Dashboard