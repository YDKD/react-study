import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from './features/counter/counterSlice'

const store = configureStore({
    devTools: true,
    enhancers: [applyMiddleware(thunk)],
    reducer: {
        counter: counterReducer
    }
})

export default store
