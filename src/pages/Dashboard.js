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
  console.log(username)
}
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={(e)=>{
          setUsername(e.target.event)
        }} ></input><br/>
        <input type="email" placeholder="email"></input><br/>
        <input type="password" placeholder="password"></input><br/>
       <label>gender</label>
        <radio>
          <input type="radio" name="gender"/>Male
          <input type="radio"  name="gender"/>Famale
        </radio>
<br/>
        <textarea type="text" placeholder="address"></textarea>
        <br/>
        <input type="file" placeholder="file"></input><br/>
        <select>
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