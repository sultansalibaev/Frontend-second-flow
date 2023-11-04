import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type Profile } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

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

const state = {
    profile: {
        isLoading: false,
        readonly: false,
        form: data
    }
}

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state)
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk(undefined)

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state)

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk(undefined)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        state.profile.form.firstname = ''
        const thunk = new TestAsyncThunk(updateProfileData, state)

        const result = await thunk.callThunk(undefined)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
