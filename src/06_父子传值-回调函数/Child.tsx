import React, { Component } from "react";

interface IProps {
  changeCount: (num: number) => void;
}

export class Child extends Component<IProps, any> {
  changeCount = (num: number) => {
    this.props.changeCount(num);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeCount(1)}>+1</button>
        <button onClick={() => this.changeCount(5)}>+5</button>
        <button onClick={() => this.changeCount(10)}>+10</button>
      </div>
    );
  }
}

export default Child;
