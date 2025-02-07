import React from 'react'
import "./dd/Styles.css"

const FunctionalComponent = (props) => {
    console.log(props);
    let applyStyle=props.apply?'heading':' '
    let myStyle={
        color:'yellow',
        backgroundColor:'red',
        fontSize:'16px'
    }




  return (
    <div>
        <h1 class={`${applyStyle}font-style`}>welcome!{props.clgName}</h1>
        <h1 style={myStyle}>welcome!{props.clgName}</h1>
    </div>
  )
}

export default FunctionalComponent