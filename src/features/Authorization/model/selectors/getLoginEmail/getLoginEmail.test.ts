import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginEmail } from './getLoginEmail'
import { type LoginSchema } from 'features/Authorization'

describe('getLoginEmail.test', () => {
    test('should return value', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            email: 'in7678523@gmail.com'
        }
        const state: DeepPartial<StateSchema> = {
            loginForm: loginForm as LoginSchema
        }
        expect(getLoginEmail(state as StateSchema)).toEqual('in7678523@gmail.com')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginEmail(state as StateSchema)).toEqual('')
    })
})
