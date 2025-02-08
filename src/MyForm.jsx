import React, { Component } from 'react'
import "./style2.css"
export class MyForm extends Component {
  constructor(props){
    super(props);

    this.state={
      textValue:' ',
      skillValue:'skill not selected '
    }
  }
  changeMessage=(event)=>{
    this.setState({
      textValue:event.target.value
    })

  }
  changeSkill=(event)=>{
    this.setState({
    skillValue:event.target.value
    })

  }
  submitted=(event)=>{
    
    alert("form is sucussefully submitted"+`${this.state.textValue}${this.state.skillValue}`)
    event.preventDefault();
  }
  render() {
    return (
      <div class="container">
        <form onSubmit={this.submitted}>
            <label>Student Name:</label>
            <input class="input1" type="text" value={this.state.textValue}
            onChange={this.changeMessage}
            ></input><br />
            <label>Skills</label>
            <select value={this.state.skillValue} onChange={this.changeSkill}>
              <option>
                  JS
              </option>
              <option>React
                
              </option>
              <option>AWS
                
              </option>
            </select><br />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MyForm