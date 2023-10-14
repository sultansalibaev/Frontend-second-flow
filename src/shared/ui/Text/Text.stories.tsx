import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum'
}
export const Error = Template.bind({})
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum',
    theme: TextTheme.ERROR
}
export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Title lorem ipsum'
}
export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Description lorem ipsum'
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Description lorem ipsum'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Title lorem ipsum'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Description lorem ipsum'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
