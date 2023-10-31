import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User } from 'entities/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const getUserData = createAsyncThunk<User, undefined, ThunkConfig<string>>(
    'profile',
    async (authData = undefined, thunkAPI) => {
        const {
            extra,
            // dispatch,
            rejectWithValue
        } = thunkAPI

        try {
            const response = await extra.api.post<User>('/profile')

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            // dispatch(userActions.initAuthData(response.data))

            return response.data
        } catch (err) {
            console.log('profile', err)
            // @ts-expect-error
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
