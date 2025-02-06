import React from 'react'
import Child3 from './Child3'
const Child2 = (props) => {
  return (
    <div>Child2
        <Child3 university={props.uni}/>
    </div>
  )
}

export default Child2