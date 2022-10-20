import React, { PureComponent } from 'react'
import FooterStyle from './Footer.module.less'

export class App extends PureComponent {
  render() {
    return (
      <div className={FooterStyle.text}>
         I'm footer
      </div>
    )
  }
}

export default App
