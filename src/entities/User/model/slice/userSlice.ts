import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice
