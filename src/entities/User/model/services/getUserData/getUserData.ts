import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User } from 'entities/User'
import { $api } from 'shared/lib/http/axiosInterceptor'

export const getUserData = createAsyncThunk<User, undefined, { rejectValue: string }>(
    'users/profile',
    async (authData = undefined, thunkAPI) => {
        try {
            const response = await $api.get<User>('/users/profile')

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            // thunkAPI.dispatch(userActions.initAuthData(response.data))

            return response.data
        } catch (err) {
            console.log('users/profile', err)
            return thunkAPI.rejectWithValue(err.response.data) // 'error login'
        }
    }
)
