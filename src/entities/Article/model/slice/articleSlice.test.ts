import { type ArticleSchema } from '../types/articleSchema'
import { articleReducer } from './articleSlice'
import { type Article, ArticleTag, ArticleType } from '../types/article'
import { fetchArticle } from '../services/fetchArticle/fetchArticle'

const data: Article = {
    id: 1,
    title: '4 важных нововведения в ES2022',
    views: 1022,
    tags: [
        ArticleTag.javascript,
        ArticleTag.es2022,
        ArticleTag.ecmascript_2022
    ],
    type: [
        ArticleType.JavaScript
    ],
    blocks: [],
    userId: 1,
    createdAt: '2023-11-11T05:58:50.658Z'
}

describe('articleSlice.test', () => {
    test('test fetch article service rejected', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: true
        }
        expect(articleReducer(
            state as ArticleSchema,
            fetchArticle.rejected(Error(), '', '', 'error')
        )).toEqual({
            error: 'error',
            isLoading: false
        })
    })

    test('test fetch article service pending', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: false
        }
        expect(articleReducer(
            state as ArticleSchema,
            fetchArticle.pending
        )).toEqual({
            isLoading: true
        })
    })

    test('test fetch article service fulfilled', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: true
        }
        expect(articleReducer(
            state as ArticleSchema,
            fetchArticle.fulfilled(data, '', '')
        )).toEqual({
            isLoading: false,
            data
        })
    })
})
