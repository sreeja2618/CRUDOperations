import React from 'react'

const FBCPropEx = (props) => {
    // console.log(props);
//   return (
//     <div>FBCPropEx</div>
    
//   )
if(props.isMarried==true){
    return(
        <div>
        <h1>{props.username} is married </h1> 
        {props.hobbies.map(h=>{
            return<li>{h}</li>
        })}
    </div>
    )
}
else{
    return <h1>Not married</h1>
}
}

export default FBCPropEx