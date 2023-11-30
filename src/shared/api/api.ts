import axios from 'axios'
import { type User } from 'entities/User'

const $api = axios.create({
    withCredentials: true,
    baseURL: __API__
})

$api.interceptors.response.use((config) => {
    return config
}, async (error: any) => {
    const originalRequest = error.config
    if (
        error.response.status === 401 &&
        Boolean(error.config) &&
        error.response.request.responseURL !== __API__ + '/auth/refresh'
    ) {
        try {
            const response = await $api.post<User>('/auth/refresh')

            console.log('auth/refresh', response.data)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            return await $api.request(originalRequest)
        } catch (e) {
            console.error('Пользователь не авторизован', e)
            localStorage.removeItem('user')
            location.reload()
        }
    }
    throw error
})

export {
    $api
}
