import React, { Component } from 'react'

export class CBCPropsEx extends Component {
  render() {
    
        console.log(this);
        return (
      <div>
        
        <h1>{this.props.age}</h1>
        <h1>{this.props.username}</h1>
        {this.props.hobbies.map(h=>{
            return<li>{h}</li>
        })}
        
        <h1>{this.props.address.city}</h1>
        <button onClick={this.props.senFun}>Click</button>
        </div>
    )
  }
}

export default CBCPropsEx