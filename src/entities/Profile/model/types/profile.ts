import { type Currency } from 'entities/Currency/model/types/currency'
import { type Country } from 'entities/Country'

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    email: string // 'in7678523@gmail.com'
    role?: string // 'admin'
    username?: string // 'Sula'
    balance?: number // 0
    phone?: string // '87789857552'
    avatar?: string // 'blob:https://web.telegram.org/f1bd54ce-db05-4d8d-ac01-6dc9e0100adb'
    gender?: string // 'male'
    firstname?: string // 'Sultan'
    lastname?: string // 'Salibaev'
    age?: number // 20
    currency?: Currency // 'RUB'
    country?: Country // 'Kazakhstan'
    city?: string // 'Semey'
    birth_date?: number // 1046109600000
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
