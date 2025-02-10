import React ,{useState,useEffect,Fragment} from 'react'

const UseEffectEx = () => {
    // const[count,setCount]=useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //     setCount(100)},5000)
    //     document.title=count
    // },[count])
// api fetching
const [users,setUsers]=useState([])
console.log(users);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users ")
    .then(res=>res.json().then(data=>{
        // console.log(data)
        setUsers(data);
    }))
    .catch(err=>console.log(err))
},[])
  return (
    <div>
        {
            users.map((user,index)=>{
                return(
                    <React.Fragment key={index}>
                    <h1>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                  </React.Fragment>
                  
                )
            })
        }
    </div>
  )
}

export default UseEffectEx