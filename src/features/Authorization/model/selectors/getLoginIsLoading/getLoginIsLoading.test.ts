import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'
import { type LoginSchema } from 'features/Authorization'

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            isLoading: true
        }
        const state: DeepPartial<StateSchema> = {
            loginForm: loginForm as LoginSchema
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})
