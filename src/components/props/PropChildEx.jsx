import React from 'react'

const PropChildEx = (props) => {
    console.log(props)
  return (
    <div>
        {props.children}
    </div>
  )
}

export default PropChildEx