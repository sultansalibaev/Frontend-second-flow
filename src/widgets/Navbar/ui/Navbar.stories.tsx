import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const Light = Template.bind({})
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Light.args = {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const Dark = Template.bind({})
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Dark.args = {}
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Dark.decorators = [ThemeDecorator(Theme.DARK)]
