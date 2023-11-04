import { type Profile, type ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { updateProfileData } from 'entities/Profile'

const data: Profile = {
    email: 'in7678523@gmail.com',
    username: 'Sula',
    balance: 0,
    phone: '87789857552',
    gender: 'male',
    firstname: 'Sultan',
    lastname: 'Salibaev',
    age: 20,
    currency: Currency.RUB,
    country: Country.Kazakhstan,
    city: 'Semey'
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: [],
            data,
            form: data
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' }
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '123456' })
        )).toEqual({ form: { username: '123456' } })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            isLoading: false
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            validateErrors: [],
            isLoading: true
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '', undefined)
        )).toEqual({
            validateErrors: [],
            isLoading: false,
            readonly: true,
            data,
            form: data
        })
    })
})
