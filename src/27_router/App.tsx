import { NavLink, useNavigate, useRoutes } from 'react-router-dom'

import './style.less'

import routes from './router'

export default function App(props: any) {
	const navigate = useNavigate()
	function handleRouteJump(path: string) {
		navigate(path)
	}

	return (
		<div>
			<h1>Header</h1>
			<div className="header">
				{/* <Link to="/home">home</Link>
					<Link to="/about">About</Link> */}
				<NavLink to="/home">home</NavLink>
				<NavLink to="/about">About</NavLink>

				<button onClick={() => handleRouteJump('/home/user-profile/123')}>
					动态路由跳转到Profile
				</button>
				<button onClick={() => handleRouteJump('/home/user-avatar?id=456&name=test')}>
					query路由跳转到Avatar
				</button>
			</div>
			{useRoutes(routes)}
			<h1>Footer</h1>
		</div>
	)
}
