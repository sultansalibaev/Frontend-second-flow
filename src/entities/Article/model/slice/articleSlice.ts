import { createSlice } from '@reduxjs/toolkit'
import { type ArticleSchema } from '../types/articleSchema'
import { fetchArticle } from '../services/fetchArticle/fetchArticle'

const initialState: ArticleSchema = {
    isLoading: true
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticle.fulfilled, (state, action) => {
                state.error = undefined
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticle.rejected, (state, action) => {
                state.isLoading = false
                state.data = undefined
                state.error = action.payload
            })
    }
})

export const {
    reducer: articleReducer,
    actions: articleActions
} = articleSlice
