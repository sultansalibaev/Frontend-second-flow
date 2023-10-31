import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set email', () => {
        const state: DeepPartial<LoginSchema> = {
            email: 'in7678523@gmail.com'
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setEmail('nogamenolive892@gmail.com')
        )).toEqual({ email: 'nogamenolive892@gmail.com' })
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'in7678523@gmail.com'
        }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('nogamenolive892@gmail.com')
        )).toEqual({ password: 'nogamenolive892@gmail.com' })
    })
})
