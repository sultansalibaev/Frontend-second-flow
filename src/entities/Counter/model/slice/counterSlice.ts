import { createSlice } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: CounterSchema = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // }
    }
})

export const {
    reducer: counterReducer,
    actions: counterActions
} = counterSlice
