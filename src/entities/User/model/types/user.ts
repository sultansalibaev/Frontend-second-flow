import { type Currency } from 'entities/Currency/model/types/currency'
import { type Country } from 'entities/Country'

export interface User {
    readonly email: string // 'in7678523@gmail.com'
    readonly role?: string // 'admin'
    readonly username?: string // 'Sula'
    readonly balance?: number // 0
    readonly phone?: string // '87789857552'
    readonly avatar?: string // 'blob:https://web.telegram.org/f1bd54ce-db05-4d8d-ac01-6dc9e0100adb'
    readonly gender?: string // 'male'
    readonly firstname?: string // 'Sultan'
    readonly lastname?: string // 'Salibaev'
    readonly age?: number // 20
    readonly currency?: Currency // 'RUB'
    readonly country?: Country // 'Kazakhstan'
    readonly city?: string // 'Semey'
    readonly birth_date?: number // 1046109600000
}

export interface UserSchema {
    authData?: User

    inited: boolean
}
