import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { HocContext } from './hoc'
import Profile from './profile'

import store from './store'
import User from './user/index'

export class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<HocContext.Provider value={store}>
					<User />
					<Profile />
				</HocContext.Provider>
			</Provider>
		)
	}
}

export default App
