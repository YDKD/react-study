import React, { Component } from 'react'
import HomeBar from './HomeBar'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>我是Home组件</h1>
        <HomeBar />
      </div>
    )
  }
}

export default Home
