import { type Article } from './Article'

export interface ArticleSchema {
    isLoading: boolean
    error?: string
    data?: Article
}
