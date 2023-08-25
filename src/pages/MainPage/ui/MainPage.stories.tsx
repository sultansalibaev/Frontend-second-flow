import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import MainPage from './MainPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [
    ThemeDecorator(Theme.DARK)
]
