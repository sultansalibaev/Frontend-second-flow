import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginEmail } from './getLoginEmail'

describe('getLoginEmail.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                email: 'in7678523@gmail.com'
            }
        }
        expect(getLoginEmail(state as StateSchema)).toEqual('in7678523@gmail.com')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginEmail(state as StateSchema)).toEqual(undefined)
    })
})
