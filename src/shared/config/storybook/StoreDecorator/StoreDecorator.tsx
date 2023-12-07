import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { loginReducer } from 'features/Authorization/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { articleReducer } from 'entities/Article/model/slice/articleSlice'

const defaltAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaltAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    )
}
