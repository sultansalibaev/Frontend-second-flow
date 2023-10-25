import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    }
})

export const {
    reducer: profileReducer,
    actions: profileActions
} = profileSlice
