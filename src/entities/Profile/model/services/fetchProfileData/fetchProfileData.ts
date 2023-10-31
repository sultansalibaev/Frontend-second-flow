import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
// import { userActions } from 'entities/User'

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'profile',
    async (_, thunkAPI) => {
        const {
            extra,
            // dispatch,
            rejectWithValue
        } = thunkAPI

        try {
            const response = await extra.api.get<Profile>('/profile')

            // dispatch(userActions.setAuthData({
            //     email: response.data.email
            // }))

            console.log('profile', response.data)

            return response.data
        } catch (err) {
            console.log('profile', err)
            // @ts-expect-error
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
