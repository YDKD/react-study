import React, { Component, ReactNode } from "react";
import "./style/index.css";

interface IProps {
  leftSlot: ReactNode;
  centerSlot: ReactNode;
  rightSlot: ReactNode;
}

export class Children extends Component<IProps> {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    );
  }
}

export default Children;
