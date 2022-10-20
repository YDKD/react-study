import React, { PureComponent } from 'react'
import WrapperStyle from './Style'

export class App extends PureComponent {
  render() {
    return (
      <WrapperStyle>
        <header>我是header</header>
        
        <div className="container">
            <div className="head">
                I'm container head
            </div>
        </div>

        <p>我是一段文字，哈哈哈</p>

        <footer>我是footer</footer>
      </WrapperStyle>
    )
  }
}

export default App
