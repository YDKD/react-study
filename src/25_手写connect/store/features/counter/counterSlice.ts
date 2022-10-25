import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fectHomeAction = createAsyncThunk('counter/fectionHomeData', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data
})

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100
    },
    reducers: {
        increment: (state, action) => {
            const payload = action.payload
            state.count += payload
        },
        decrement: (state, action) => {
            const payload = action.payload
            state.count -= payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fectHomeAction.fulfilled, (state, action) => {
            console.log('123123');
            
        })
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
