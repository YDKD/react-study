import React, { Component } from "react";
import Children from "./Children";

export class App extends Component {
  render() {
    const leftSlot = <div>我是left元素</div>;
    const centerSlot = <div>我是left元素</div>;
    const rightSlot = <div>我是left元素</div>;
    return (
      <div>
        <Children leftSlot={leftSlot} centerSlot={centerSlot} rightSlot={rightSlot} />
      </div>
    );
  }
}

export default App;
