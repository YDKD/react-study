import React, { createRef, LegacyRef, PureComponent } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import TransitionApp from "./TransitionGroup";
import "./style.css";

// react动画，需要借助 reactct-transition-group
interface IState {
  isShow: boolean;
}

export class App extends PureComponent<any, IState> {
  cssRef: any
  constructor(props: any) {
    super(props);

    this.state = {
      isShow: false,
    };

    this.cssRef = createRef()
  }

  toggleVisible() {
    console.log("is", this.state.isShow);

    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    const { isShow } = this.state;

    return (
      <div className="container">
        <button onClick={() => this.toggleVisible()}>Toggle</button>
        <SwitchTransition mode="out-in">
          <CSSTransition in={isShow} timeout={800} classNames="ydkd" key={isShow ? 'Hello' : "Bye"} nodeRef={this.cssRef} unmountOnExit>
            <div ref={this.cssRef}>
              {
                isShow ? <h1>Hello React Transition</h1> : <TransitionApp></TransitionApp>
              }
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default App;
