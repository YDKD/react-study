import { Component, ReactNode } from "react";

interface IProps {
  message: string;
}

class Child extends Component {
//   constructor(props: IProps) {
//     super(props);
//   }
  render(): ReactNode {
    // 这里不使用 super 将props的值存储到子组件中，react内部其实也会加一行代码去帮我存储
    const { message } = this.props;

    return <div>{message}</div>;
  }
}

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <div>我是App组件</div>
        <Child message="我是传递给子组件的值" />
      </>
    );
  }
}

export default App;
