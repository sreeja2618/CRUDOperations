import React,{useEffect, useRef,useState} from 'react'
import vid from "./vid.mp4"

const RefEx = () => {
    const[play,setPlay]=useState(true);
    const ele=useRef();
    const vidref=useRef();
    // console.log(ele);
    useEffect(()=>{
        ele.current.style.color="red";
        ele.current.innerText="React ref"
    })
    let playorpause=()=>{
        if(play==true){
            vidref.current.play();
            console.log(play);
            setPlay(false);
        }
        else{
            vidref.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
        <h1 ref={ele}>reff</h1>
        <video src={vid} ref={vidref} onClick={playorpause} height="1000" width="1000"></video>
    </div>
  )
}

export default RefEx