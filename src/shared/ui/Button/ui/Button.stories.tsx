import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
}

export const PrimaryDark = Template.bind({})
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
PrimaryDark.args = {
    children: 'Button'
}

export const ClearDark = Template.bind({})
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]
ClearDark.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR
}

export const ClearInvertedDark = Template.bind({})
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
ClearInvertedDark.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED
}

export const OutlineDark = Template.bind({})
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
OutlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
}
