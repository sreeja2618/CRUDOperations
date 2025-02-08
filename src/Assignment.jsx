import React, { Component } from "react";
import "./styles1.css"; // Import CSS file

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { users: "Default User", isChanged: false };
  }

  changeNumber = () => {
    this.setState({ users: "SS", isChanged: true });
  };

  render() {
    return (
      <div className="container">
        <p className={this.state.isChanged ? "user-text changed" : "user-text"}>
          {this.state.users}
        </p>
        <button className="change-btn" onClick={this.changeNumber}>
          Change User
        </button>
      </div>
    );
  }
}

export default MyComponent;
