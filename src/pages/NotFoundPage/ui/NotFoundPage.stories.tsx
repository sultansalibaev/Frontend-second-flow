import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [
    ThemeDecorator(Theme.DARK)
]
