export interface LoginErrors {
    email?: []
    password?: []
    message?: string
}

export interface LoginSchema {
    email: string
    password: string
    isLoading?: boolean
    errors?: LoginErrors
}
