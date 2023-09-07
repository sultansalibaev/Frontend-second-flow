import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByEmail } from 'features/AuthByUsername/model/services/loginByEmail/loginByEmail'

const initialState: LoginSchema = {
    isLoading: false,
    email: '',
    password: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByEmail.fulfilled, (state, action) => {
                state.isLoading = false
                console.log('login success', action.payload)
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {
    reducer: loginReducer,
    actions: loginActions
} = loginSlice
