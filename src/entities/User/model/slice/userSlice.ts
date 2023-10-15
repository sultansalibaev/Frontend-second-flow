import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { getUserData } from 'entities/User/model/services/getUserData/getUserData'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            console.log('до', state.authData)
            state.authData = action.payload
            console.log('после', state.authData)
        },
        // initAuthData: (state, action) => {
        //     if (state.authData === undefined) {
        //         console.log('state.authData', state.authData)
        //         state.authData = action.payload
        //     }
        // },
        logout: (state) => {
            state.authData = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(getUserData.pending, (state) => {
            //     state.errors = undefined
            //     state.isLoading = true
            // })
            .addCase(getUserData.fulfilled, (state, action) => {
                console.log('get user data success', action.payload)
                state.authData = action.payload
            })
            .addCase(getUserData.rejected, (state, action) => {
                console.error('get user data error', action.payload)
                state.authData = undefined
            })
    }
})

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice
