import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoryProvider'
import { type StateSchema } from 'app/providers/StoryProvider/config/StateSchema'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoryProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoryProvider = function (props: StoryProviderProps) {
    const {
        children,
        initialState
    } = props

    const store = createReduxStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
