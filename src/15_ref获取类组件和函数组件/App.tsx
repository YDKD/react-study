import React, { createRef, forwardRef, PureComponent } from "react";

class HelloWorld extends PureComponent {
  sayHello() {
    console.log("Hello World");
  }

  render(): React.ReactNode {
    return <div>Hello World</div>;
  }
}

const FnHelloWorld = forwardRef((props, ref) => {
  return (
    <div>
      <div ref={ref}>Hello World 函数组件</div>
    </div>
  );
});

export class App extends PureComponent {
  helloWorldRef: React.RefObject<HTMLElement>;
    fnHelloWorldRef: React.RefObject<unknown>;
  constructor() {
    super();

    this.state = {};

    this.helloWorldRef = createRef();

    this.fnHelloWorldRef = createRef();
  }
  getDOM() {
    this.helloWorldRef.current?.sayHello();
  }

  getDOM2() {
    console.log("this.fnHelloWorldRef", this.fnHelloWorldRef.current);
  }

  render(): JSX.Element {
    return (
      <div>
        <HelloWorld ref={this.helloWorldRef} />
        <FnHelloWorld ref={this.fnHelloWorldRef} />
        <button onClick={() => this.getDOM()}>getDOM获取类组件</button>
        <button onClick={() => this.getDOM2()}>getDOM获取函数组件</button>
      </div>
    );
  }
}

export default App;
