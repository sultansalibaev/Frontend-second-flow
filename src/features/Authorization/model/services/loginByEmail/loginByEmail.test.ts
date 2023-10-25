import { loginByEmail } from 'features/Authorization/model/services/loginByEmail/loginByEmail'
import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            get: jest.fn(),
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
                response: { use: jest.fn(), eject: jest.fn() }
            }
        })),
        post: jest.fn(() => ({
            mockReturnValue: jest.fn()
        }))
    }
})
// jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByEmail.test', () => {
    // let dispatch: Dispatch
    // let getState: () => StateSchema
    //
    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })

    test('success login', async () => {
        const userValue = {
            email: 'in7678523@gmail.com'
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByEmail)
        const result = await thunk.callThunk({ email: 'in7678523@gmail.com', password: '123456789' })

        console.log('loginByEmail.test-result', result)

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByEmail)
        const result = await thunk.callThunk({ email: 'in7678523@gmail.com', password: '123456789' })

        console.log('loginByEmail.test-result', result)

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual(undefined)
    })
})
