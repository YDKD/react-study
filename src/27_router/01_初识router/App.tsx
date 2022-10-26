import React, { PureComponent } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './views/About'
import Home from './views/Home'

export class App extends PureComponent {
	render() {
		return (
			<div>
				<h1>Header</h1>
				<div className="header">
					<Link to="/home">home</Link>
					<Link to="/about">About</Link>
				</div>
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
				<h1>Footer</h1>
			</div>
		)
	}
}

export default App
