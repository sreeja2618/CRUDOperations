import React, { Component } from 'react'


export class CBCStateex extends Component {
    constructor(){
        super();
        this.state={
            users:["a","b","c"],
            num:20,
            count:0
        }
        
    }
   changeNumber=()=>{
    this.setState({num:200})

    }
    increment = () => {
        this.setState({count:this.state.count+1});
    }
    decrement = () => {
        this.setState({count:this.state.count-1});
    }
    
  render() {
    console.log(this.state)
    return (
      <div>
        {
            this.state.users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })
        }
        <p>{this.state.num}</p>
        <button onClick={this.changeNumber}>Change number</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default CBCStateex