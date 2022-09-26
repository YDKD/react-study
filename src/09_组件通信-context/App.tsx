import React, { Component } from "react";
import ThemeContext from "./context/Theme";
import UserContext from "./context/User";
import Home from "./Home";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>我是APP组件</h1>
        <UserContext.Provider value={{ userName: "zmy" }}>
          <ThemeContext.Provider value={{ color: "blue", text: "我是来自App组件的属性提供" }}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
