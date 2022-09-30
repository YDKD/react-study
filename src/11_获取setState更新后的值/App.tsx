import React, { Component } from "react";
import { flushSync } from "react-dom";

interface IState {
  count: number;
}

export class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // 能够立即更新render
    flushSync(() => {
      this.setState({
        count: this.state.count + 1
      })
    })
    console.log('count', this.state.count);
  }

  render() {
    console.log("render函数执行了");

    const { count } = this.state;
    return (
      <div>
        <h1>Count计数：{count}</h1>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    );
  }
}

export default App;
