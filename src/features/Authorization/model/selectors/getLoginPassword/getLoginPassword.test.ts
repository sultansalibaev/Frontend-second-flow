import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'
import { type LoginSchema } from 'features/Authorization'

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            password: '123456789'
        }
        const state: DeepPartial<StateSchema> = {
            loginForm: loginForm as LoginSchema
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123456789')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
