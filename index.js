import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      // <div class="navbar">
      //   <a href="#home">Home</a>
      //   <a href="#news">News</a>
      //   <div class="dropdown">
      //     <button class="dropbtn">
      //       Dropdown
      //       <i class="fa fa-caret-down" />
      //     </button>
      //     <div class="dropdown-content">
      //       <a href="#">Link 1</a>
      //       <a href="#">Link 2</a>
      //       <a href="#">Link 3</a>
      //     </div>
      //   </div>
      // </div>

      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">Home</a>
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
