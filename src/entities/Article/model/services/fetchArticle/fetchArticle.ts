import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const fetchArticle = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticle',
    async (articleId, thunkAPI) => {
        const {
            extra,
            // dispatch,
            rejectWithValue
        } = thunkAPI

        console.log('article/fetchArticle')

        try {
            const response = await extra.api.get<Article>(`/article/${articleId}`)

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) throw new Error()

            console.log('article', response.data)

            return response.data
        } catch (err) {
            console.log('article', err)
            // @ts-expect-error
            return rejectWithValue(err.response.data) // 'error login'
        }
    }
)
