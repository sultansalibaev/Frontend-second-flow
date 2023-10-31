import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const logout = createAsyncThunk<User, undefined, ThunkConfig<string>>(
    'auth/login',
    async (_, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue
        } = thunkAPI

        try {
            const response = await extra.api.post<User>('/auth/logout')

            dispatch(userActions.setAuthData({ email: '' }))

            extra.navigate?.('/about')

            return response.data
        } catch (err) {
            // @ts-expect-error
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
