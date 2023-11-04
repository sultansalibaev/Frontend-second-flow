import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { type Profile } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileForm.test', () => {
    test('should return profile form', () => {
        const form: Profile = {
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
                form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
