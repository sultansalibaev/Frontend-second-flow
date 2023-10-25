import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginErrors } from './getLoginErrors'

describe('getLoginErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                errors: {
                    message: 'Некорректный email или пароль'
                }
            }
        }
        expect(getLoginErrors(state as StateSchema)).toEqual({ message: 'Некорректный email или пароль' })
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginErrors(state as StateSchema)).toEqual(undefined)
    })
})
