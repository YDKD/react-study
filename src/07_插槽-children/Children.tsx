import React, { Component, ReactNode } from 'react'
import './style/index.css'

interface IProps {
    children: ReactNode[]
}

export class Children extends Component<IProps> {
  render() {
    const { children } = this.props
    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[1]}</div>
      </div>
    )
  }
}


export default Children
