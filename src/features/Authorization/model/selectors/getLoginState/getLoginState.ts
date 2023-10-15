import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginState = (state: StateSchema) => state?.loginForm ?? { email: 'in7678523@gmail.com', password: '123456789', errors: {}, isLoading: true }
