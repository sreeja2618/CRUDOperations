import React from 'react'

const FBCStateex = () => {
//    const data= React.useState("a");
//    console.log(data);
        const [value,setValue]=React.useState(0);
        // console.log(value)
        const changeValue=()=>{
            setValue(1000);
        }
        const increment=()=>{
            setValue(value+1);
        }
        const decrement=()=>{
            setValue(value-1);
        }

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={changeValue}>changevalue</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
    </div>
  )
}

export default FBCStateex