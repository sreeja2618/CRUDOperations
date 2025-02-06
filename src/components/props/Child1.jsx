import React from 'react'
import Child2 from './Child2'
const Child1 = (props) => {
  return (
    <div>
        <h1>CHild1</h1>
        <Child2 university={props.uni}/>
    </div>
  )
}

export default Child1