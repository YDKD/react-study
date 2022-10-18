import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import './style.css'

// react动画，需要借助 reactct-transition-group
interface IState {
  isShow: boolean;
}

export class App extends PureComponent<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isShow: false,
    };
  }

  toggleVisible() {
    console.log('is', this.state.isShow);
    
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    const { isShow } = this.state;

    return (
      <div>
        <button onClick={() => this.toggleVisible()}>Toggle</button>
        <CSSTransition in={isShow} timeout={2000} classNames="ydkd" unmountOnExit>
          <h1>Hello React Transition</h1>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
