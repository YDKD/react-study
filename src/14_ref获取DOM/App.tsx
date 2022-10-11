import React, { createRef, PureComponent } from 'react'

export class App extends PureComponent {
  ref2: React.RefObject<unknown>;
  constructor(){
    super()

    this.state = {}

    this.ref2 = createRef()
    
  }

  getDOM(el: HTMLElement){
    // 获取方式1： 直接通过 this.refs.ref1 获取
    console.log(this.refs.ref1);

    // 获取方式2： 通过 createRef() 创建的 ref
    console.log('ref2', this.ref2.current);
    

    // 获取方式3： 通过事件对象获取
    console.log('ref3', el);
  }

  

  render() {
    return (
      <div>
        <h2 ref="ref1">获取方式1</h2>
        <h2 ref={this.ref2}>获取方式2</h2>
        <h3 ref={(el) => this.getDOM(el!)}>获取方式3</h3>

        <button onClick={() => this.getDOM()}>getDom</button>
      </div>
    )
  }
}

export default App
 