import React, { Component } from "react";

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
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    }, () => {
        console.log('更新完之后执行的回调函数');
    });
    console.log("state", this.state.count);

    // // 这里是批量更新了
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })
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
