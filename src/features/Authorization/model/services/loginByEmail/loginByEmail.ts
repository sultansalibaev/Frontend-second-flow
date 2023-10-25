import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
// import { $api } from 'shared/lib/http/axiosInterceptor'
import axios from 'axios'

interface LoginByEmailProps {
    email: string
    password: string
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
    'auth/login',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post<User>('/auth/login', authData)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            dispatch(userActions.setAuthData({
                email: authData.email
            }))

            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
