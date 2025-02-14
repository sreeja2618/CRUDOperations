// import React from 'react'
// import Navbar from './components/Navbar'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Assessment from "./pages/Assessment"
// import Dashboard from "./pages/Dashboard"
// import Classrooms from "./pages/Classrooms"
// import Store from "./pages/Store"
// import Calender from "./pages/Calender"
// import News from "./pages/News"
// import Blog from "./pages/Blog"
// import Pagenotfound from './pages/Pagenotfound'
// import Profile from './pages/Profile'
// import Myaccount from './pages/Myaccount'
// import Myseetings from './pages/Myseetings'

// const App = () => {
//   return (
//         <BrowserRouter>
//          <Navbar/>
//          <Routes>
//           <Route path="/" element={<Dashboard/>}/>
//           <Route path="/classrooms" element={<Classrooms/>}/>
//           <Route path="/assessment" element={<Assessment/>}/>
//           <Route path="/store" element={<Store/>}/>
//           <Route path="/calender" element={<Calender/>}/>
//           <Route path="/news" element={<News/>}/>
//           <Route path="/blog" element={<Blog/>}/>
//           <Route path="/profile" element={<Profile/>}>
//           <Route path="/profile/accounts" element={<Myaccount/>}/>
//           <Route path="/profile/settings" element={<Myseetings/>}/>
//           </Route>
//           <Route path="*" element={<Pagenotfound/>}/>
//          </Routes>
//          </BrowserRouter>
    
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './crudcomponents/Home'
import Edit from './crudcomponents/Edit'
import Create from './crudcomponents/Create'
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App