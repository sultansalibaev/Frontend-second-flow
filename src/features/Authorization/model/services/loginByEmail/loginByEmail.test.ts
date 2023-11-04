import { loginByEmail } from 'features/Authorization/model/services/loginByEmail/loginByEmail'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByEmail.test', () => {
    test('success login', async () => {
        const userValue = {
            email: 'in7678523@gmail.com'
        }

        const thunk = new TestAsyncThunk(loginByEmail)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const result = await thunk.callThunk({ email: 'in7678523@gmail.com', password: '123456789' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByEmail)

        // eslint-disable-next-line prefer-promise-reject-errors
        thunk.api.post.mockReturnValue(Promise.reject({ status: 403 }))

        const result = await thunk.callThunk({ email: 'in7678523@gmail.com', password: '123456789' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual(undefined)
    })
})
