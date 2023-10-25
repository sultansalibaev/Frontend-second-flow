import { type Country, type Currency } from 'shared/const/common'

export interface Profile {
    email: string // 'in7678523@gmail.com'
    role?: string // 'admin'
    username?: string // 'Sula'
    balance?: number // 0
    phone?: number // '87789857552'
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
    isLoading: boolean
    error?: string
    readonly: boolean
}
