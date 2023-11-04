import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { type Profile } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileData.test', () => {
    test('should return profile data', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
