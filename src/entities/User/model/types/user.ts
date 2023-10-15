export interface User {
    readonly email: string
    readonly role?: string
    readonly username?: string
    readonly balance?: number
    readonly phone?: number
    readonly avatar?: string
    readonly gender?: string
    readonly name?: string
    readonly surname?: string
    readonly birth_date?: number
}

export interface UserSchema {
    authData?: User
}
