import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { $api } from 'shared/lib/http/axiosInterceptor'

interface LoginByEmailProps {
    email: string
    password: string
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
    'auth/login',
    async (authData, thunkAPI) => {
        try {
            const response = await $api.post<User>('/auth/login', authData)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            thunkAPI.dispatch(userActions.setAuthData({
                email: authData.email
            }))

            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.response.data) // 'error login'
        }
    }
)
