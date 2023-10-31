import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'profile/update',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState
        } = thunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile/update', formData)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            return response.data
        } catch (err) {
            console.log('profile', err)
            // @ts-expect-error
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
