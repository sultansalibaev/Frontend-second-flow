import { type StateSchema } from 'app/providers/StoreProvider'
import {
    getArticleData,
    getArticleIsLoading,
    getArticleError
} from './article'
import { type ArticleType } from 'entities/Article'

describe('getArticleData.test', () => {
    test('should return article data', () => {
        const data: DeepPartial<ArticleType> = {
            id: 1,
            title: ''
        }
        const state: DeepPartial<StateSchema> = {
            article: {
                data
            }
        }
        expect(getArticleData(state as StateSchema)).toEqual(data)
    })
    test('should return article isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                isLoading: true
            }
        }
        expect(getArticleIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should return article error', () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                error: 'error'
            }
        }
        expect(getArticleError(state as StateSchema)).toEqual('error')
    })
    test('getArticleData should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleData(state as StateSchema)).toEqual(undefined)
    })
    test('( should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleIsLoading(state as StateSchema)).toEqual(undefined)
    })
    test('getArticleError should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleError(state as StateSchema)).toEqual(undefined)
    })
})
