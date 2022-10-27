import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class index extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/home/user-info">用户信息</Link>
        <Link to="/home/user-avatar">用户头像</Link>

        {/* 占位符号 */}
        <Outlet />
      </div>
    )
  }
}

export default index
