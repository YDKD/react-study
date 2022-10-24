// 1. 创建一个store
// 2. 引入其他组件的reducer
// 3. 增强reducer
// 4. 开启redux-devtools

import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk'

import homeReducer from '../Home/store/reducer'

const reducer = combineReducers({
    home: homeReducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 这里使用了redux-thunk中间件，用于处理异步action
// 同时使用了composeEnhancers增强器，用于开启redux-devtools，它会把 applyMiddleware中的中间件和redux-devtools结合起来
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
