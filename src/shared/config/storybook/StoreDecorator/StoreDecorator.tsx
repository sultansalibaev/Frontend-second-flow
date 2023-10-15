import { type Story } from '@storybook/react'
import { createReduxStore, type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

export const StoreDecorator = (StoryComponent: Story) => {
    const initialState: DeepPartial<StateSchema> = {
        counter: { value: 1 },
        user: { authData: { email: 'in7678523@gmail.com' } }
    }
    const store = createReduxStore(initialState as StateSchema)
    return (
        <Provider store={store}>
            <StoryComponent />
        </Provider>
    )
}
