import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile= () => {
  return (
    <div style={{width:"100%",background:"bisque",height:"100vh"}}>
        <Link to="/profile/accounts">My accounts</Link>
        <br />
        <Link to="/profile/settings">My Settings</Link>
        <Outlet/>
    </div>
  )
}

export default Profile