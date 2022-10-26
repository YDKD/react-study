import React, { PureComponent } from 'react'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import './style.less'

import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'

export class App extends PureComponent {
	render() {
		return (
			<div>
				<h1>Header</h1>
				<div className="header">
					{/* <Link to="/home">home</Link>
					<Link to="/about">About</Link> */}
					<NavLink
						to="/home"
						style={() => ({
							color: 'blue'
						})}
					>
						home
					</NavLink>
					<NavLink to="/about">About</NavLink>
				</div>
				<Routes>
					{/* navigate可以处理当我们访问一个路径时，直接重定向到另外一个路由 */}
					<Route path="/" element={<Navigate to="/home" />}></Route>

					<Route path="/home" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/404" element={<NotFound />}></Route>
					<Route path="*" element={<Navigate to="/404" />}></Route>
				</Routes>
				<h1>Footer</h1>
			</div>
		)
	}
}

export default App
