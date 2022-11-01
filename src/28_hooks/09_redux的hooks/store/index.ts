import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features'

const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store
