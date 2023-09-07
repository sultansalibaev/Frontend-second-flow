import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User } from 'entities/User'

interface LoginByEmailProps {
    email: string
    password: string
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
    'auth/login',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8080/auth/login', authData, {
                withCredentials: true
            })

            console.log('auth/login', response.data)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue('error login')
        }
    }
)
