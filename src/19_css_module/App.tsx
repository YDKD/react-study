import React, { PureComponent } from 'react'
import Home from './Home/Home'
import Banner from './Banner/Banner'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Banner></Banner>
      </div>
    )
  }
}

export default App
