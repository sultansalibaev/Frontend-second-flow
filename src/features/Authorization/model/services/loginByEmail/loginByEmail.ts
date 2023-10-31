import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'
// import { $api } from 'shared/lib/http/axiosInterceptor'
// import axios from 'axios'
// import { type ThunkExtraArg } from 'app/providers/StoreProvider'

interface LoginByEmailProps {
    email: string
    password: string
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, ThunkConfig<string>>(
    'auth/login',
    async (authData, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue
        } = thunkAPI

        try {
            const response = await extra.api.post<User>('/auth/login', authData)

            dispatch(userActions.setAuthData({
                email: authData.email
            }))

            // extra.navigate?.('/profile')

            return response.data
        } catch (err) {
            // @ts-expect-error
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
