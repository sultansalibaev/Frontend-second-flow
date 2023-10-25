import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/Authorization/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'

const defaltAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaltAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    )
}
