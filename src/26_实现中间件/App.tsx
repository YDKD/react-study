import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import store from './store/index'

import App1 from './01_原生的store/App'
import App2 from './02_react-redux/App'
import ReduxThunk from './03_redux-thunk/App'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>原生的Store</h1>
        <App1 />

        <h1>react-redux</h1>
        <Provider store={ store  }>
            <App2 />
            <ReduxThunk />
        </Provider>
      </div>
    )
  }
}

export default App
