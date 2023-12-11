import { type User } from 'entities/User'

export interface Comment {
    id: number
    user: User
    text: string
}
