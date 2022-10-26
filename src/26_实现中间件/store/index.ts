import { createStore } from 'redux'
// import thunk from 'redux-thunk'
import { log, thunk, applyMiddleware } from './middleware'
import reducer from './reducer'

// 创建 redux分为一下几步
// 1. 创建store
// 2. 创建reducer
// 3. 创建action
// 4. 创建action creator
// 5. 创建dispatch
// 6. 创建subscribe

// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(reducer)

applyMiddleware(store, log, thunk)
// log(store)
// thunk(store)

export default store
