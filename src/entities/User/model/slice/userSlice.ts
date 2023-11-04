import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage'

const initialState: UserSchema = {
    inited: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
            if (user != null) {
                state.authData = JSON.parse(user)
            }
            state.inited = true
        }
    }
})

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice
