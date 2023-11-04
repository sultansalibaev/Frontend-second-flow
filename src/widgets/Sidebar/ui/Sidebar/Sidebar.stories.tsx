import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: {
        authData: { email: '' }
    }
})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: { email: '' }
    }
})]

export const NoAuth = Template.bind({})
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
