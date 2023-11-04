import { validateProfileData } from './validateProfileData'
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

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and first name', () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: ''
        })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('without username', () => {
        const result = validateProfileData({
            ...data,
            username: ''
        })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME])
    })

    test('without city', () => {
        const result = validateProfileData({
            ...data,
            city: ''
        })

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
    })

    test('without data', () => {
        const result = validateProfileData(undefined)

        expect(result).toEqual([ValidateProfileError.NO_DATA])
    })
})
