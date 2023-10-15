import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginErrors, type LoginSchema } from '../types/loginSchema'
import { loginByEmail } from 'features/Authorization/model/services/loginByEmail/loginByEmail'

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
                state.errors = undefined
                state.isLoading = true
            })
            .addCase(loginByEmail.fulfilled, (state, action) => {
                state.isLoading = false
                console.log('login success', action.payload)
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.errors = action.payload as LoginErrors
            })
    }
})

export const {
    reducer: loginReducer,
    actions: loginActions
} = loginSlice
