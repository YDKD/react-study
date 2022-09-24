import React, { Component } from 'react'
import Children from './Children'

export class App extends Component {
  render() {
    return (
      <div>
        <Children>
            <div>我是left元素</div>
            <div>我是center元素</div>
            <div>我是right元素</div>
        </Children>
      </div>
    )
  }
}

export default App
