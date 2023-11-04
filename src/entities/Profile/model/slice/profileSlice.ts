import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.validateErrors = []
            state.form = state.data
        },
        updateProfile: (state, action) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },
        setValidateErrors: (state, action) => {
            state.validateErrors = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.error = ''
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.data = { email: '' }
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = []
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.validateErrors = []
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    }
})

export const {
    reducer: profileReducer,
    actions: profileActions
} = profileSlice
