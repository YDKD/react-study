import React, { PureComponent } from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import './style.less'

import About from './views/About'
import Home from './views/Home'
import HomeUserInfo from './views/Home/UserInfo'
import HomeUserAvatar from './views/Home/UserAvatar'
import HomeUserProfile from './views/Home/UserProfile'
import NotFound from './views/NotFound'
import { WithRouter } from './hoc'
import { IRouter } from './views/types'

interface IProps {
	router: IRouter
}

export class App extends PureComponent<IProps> {
	handleRouteJump(path: string) {
		this.props.router.navigate(path)
	}

	render() {
		return (
			<div>
				<h1>Header</h1>
				<div className="header">
					{/* <Link to="/home">home</Link>
					<Link to="/about">About</Link> */}
					<NavLink to="/home">home</NavLink>
					<NavLink to="/about">About</NavLink>

					<button onClick={() => this.handleRouteJump('/home/user-profile/123')}>动态路由跳转到Profile</button>
					<button onClick={() => this.handleRouteJump('/home/user-avatar?id=456&name=test')}>query路由跳转到Avatar</button>
				</div>
				<Routes>
					{/* navigate可以处理当我们访问一个路径时，直接重定向到另外一个路由 */}
					<Route path="/" element={<Navigate to="/home" />}></Route>

					<Route path="/home" element={<Home />}>
						{/* 重定向 访问 /home 到 /home/user-info */}
						<Route path="/home" element={<Navigate to="/home/user-info" />} />
						<Route path="/home/user-info" element={<HomeUserInfo />} />
						<Route path="/home/user-avatar" element={<HomeUserAvatar />} />
						<Route path="/home/user-profile/:id" element={<HomeUserProfile />} />
					</Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/404" element={<NotFound />}></Route>
					<Route path="*" element={<Navigate to="/404" />}></Route>
				</Routes>
				<h1>Footer</h1>
			</div>
		)
	}
}

export default WithRouter(App)
