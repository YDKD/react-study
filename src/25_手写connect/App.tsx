import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import Profile from './profile'

import store from './store'
import User from './user/index'

export class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
            <User />
            <Profile />
        </Provider>
    )
  }
}

export default App
