import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginErrors } from './getLoginErrors'
import { type LoginSchema } from 'features/Authorization'

describe('getLoginErrors.test', () => {
    test('should return error', () => {
        const loginForm: DeepPartial<LoginSchema> = {
            errors: {
                message: 'Некорректный email или пароль'
            }
        }
        const state: DeepPartial<StateSchema> = {
            loginForm: loginForm as LoginSchema
        }
        expect(getLoginErrors(state as StateSchema)).toEqual({ message: 'Некорректный email или пароль' })
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginErrors(state as StateSchema)).toEqual(undefined)
    })
})
