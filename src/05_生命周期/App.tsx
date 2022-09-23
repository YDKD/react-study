import { Component, ReactNode } from "react";

interface IState {
  text: string;
}

export class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: "Hello React",
    };

    // 生命周期-1.初始化constructor
    console.log("生命周期-1.初始化constructor");
  }

  changeText = () => {
    this.setState({
      text: "Hell World",
    });
  };

  componentDidMount(): void {
    console.log("生命周期-3. componentDidMount函数");
  }

  render(): ReactNode {
    // 生命周期-2. render函数
    const { text } = this.state;

    console.log("生命周期-2. render函数");

    return (
      <div>
        <h1>{text}</h1>

        {/* 1、修改react */}
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    );
  }

  /**
   * @description: 
   * @param {Readonly} nextProps 更新后的props
   * @param {Readonly} nextState 更新后的 state
   * @param {any} nextContext 更新后的COntext
   * @return {*}
   * @author: tianqingwen
   */  
  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<IState>, nextContext: any): boolean {
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("nextContext", nextContext);
    console.log('控制是否执行组件更新', 'shouldComponentUpdate');
    return true
  }

  /**
   * @description: 
   * @param {Readonly} prevProps 前一次的props
   * @param {Readonly} prevState 前一次的State
   * @return {*}
   * @author: tianqingwen
   */  
  getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<IState>) {
      console.log('prevProps', prevProps);
      console.log('prevState', prevState);
      console.log('快照');
      return {
        snapshot: true
      }
  }

  /**
   * @description:
   * @param {Readonly} prevProps 之前的props
   * @param {Readonly} prevState 之前的state
   * @param {any} snapshot 在组件更新之间生成的快照
   * @return {*}
   * @author: tianqingwen
   */
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
    console.log("生命周期-4. componentDidUpdate函数");
  }
}

export default App;
