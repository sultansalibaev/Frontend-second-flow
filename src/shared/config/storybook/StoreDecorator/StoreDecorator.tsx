import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (store: StateSchema) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={store}>
            <StoryComponent />
        </StoreProvider>
    )
}
