import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import Home from './Home'
import Profile from './Profile'
import store from './store'

import { AppWrapper } from './style'

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <Provider store={ store }>
            <Home type={'changeHomeTitle'} />
            <Profile />
        </Provider>
      </AppWrapper>
    )
  }
}

export default App
