import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    const[users,setUsers]=useState([])
    console.log(users)
    useEffect(()=>{
        axios.get("http://localhost:8000/users")
        .then(res=>{
            setUsers(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <section id="homeBlock">
        <article>
            <h1>List of users</h1>
            <div className='createbtn'>
                <Link to="/create">Add users(+)</Link>
            </div>
           {
            users && users.length>0?(
                <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            ):<h1>No data</h1>
           }
        </article>
    </section>
  )
}

export default Home