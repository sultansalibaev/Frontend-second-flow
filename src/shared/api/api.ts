import axios from 'axios'
import { type User } from 'entities/User'

const $api = axios.create({
    withCredentials: true,
    baseURL: __API__
})

$api.interceptors.response.use((config) => {
    return config
}, async (error: any) => {
    console.log('$api.interceptors error')
    const originalRequest = error.config
    if (error.response.status === 401 && (Boolean(error.config)) && error.config._isRetry !== true) {
        originalRequest._isRetry = true
        try {
            const response = await $api.post<User>('/auth/refresh')

            console.log('auth/refresh', response.data)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            return await $api.request(originalRequest)
        } catch (e) {
            console.error('Пользователь не авторизован', e)
        }
    }
    throw error
})

export {
    $api
}
