import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import User from './user/index'

export class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
            <User />
        </Provider>
    )
  }
}

export default App
