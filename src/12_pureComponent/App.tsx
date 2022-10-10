import React, { Component } from "react";
import Home from "./Home";
import Profile from "./Profile";

interface IState {
  count: number;
}


// 1、在使用Component时，需要注意的是，如果父组件的render函数被运行了，它的子组件的render都将被重新运行



export class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count计数：{count}</h1>
        <button onClick={() => this.increment()}>+1</button>
        <Home />
        <Profile count={count} />
      </div>
    );
  }
}

export default App;
