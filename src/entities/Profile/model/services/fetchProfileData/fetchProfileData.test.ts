import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type Profile } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk(undefined)

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk(undefined)

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
