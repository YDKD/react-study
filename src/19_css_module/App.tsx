import React, { PureComponent } from 'react'
import Home from './Home/Home'
import Banner from './Banner/Banner'
import Footer from './Footer/App'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Banner></Banner>
        <Footer />
      </div>
    )
  }
}

export default App
