import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
    type Profile,
    type ValidateProfileError,
    ValidateProfileError as ValidateProfileErrors
} from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData'
import { profileActions } from 'entities/Profile'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileError[]>>(
    'profile/update',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch
        } = thunkAPI

        const formData = getProfileForm(getState())

        const validateErrors = validateProfileData(formData)

        dispatch(profileActions.setValidateErrors(validateErrors))

        try {
            if (validateErrors.length > 0) {
                return rejectWithValue(validateErrors)
            }

            const response = await extra.api.put<Profile>('/profile/update', formData)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            return response.data
        } catch (err) {
            console.log('profile', err)
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]) // 'error login'
        }
    }
)
