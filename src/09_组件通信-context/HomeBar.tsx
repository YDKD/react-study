import React, { Component } from "react";
import ThemeContext from "./context/Theme";
import UserContext, { IUserContext } from "./context/User";

export class HomeBar extends Component {
  static contextType?: React.Context<IUserContext> | undefined = UserContext;
  render() {
    const { userName } = this.context as IUserContext;

    return (
      <div>
        <h1>我是HomeBar组件</h1>
        <ThemeContext.Consumer>
          {(value) => {
            return (
              <>
                <h1 style={{ color: value.color }}>{value.text}</h1>
                <h1>用户名：{userName}</h1>
              </>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

HomeBar.contextType = UserContext;

export default HomeBar;
