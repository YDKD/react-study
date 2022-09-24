import React, { Component } from "react";
import Child from "./Child";

interface ISate {
  count: number;
}

export class App extends Component<any, ISate> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  changeCount(count: number) {
    this.setState({
        count: this.state.count + count
    })
  }

  render() {
    const { count } = this.state
    
    return (
      <div>
        <h1>{ count }</h1>
        <Child changeCount={(count: number) => this.changeCount(count)} />
      </div>
    );
  }
}

export default App;
