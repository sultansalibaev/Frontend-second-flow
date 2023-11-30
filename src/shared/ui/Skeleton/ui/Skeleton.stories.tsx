import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
    margin: '15px',
    width: 'calc(100% - (15px * 2))',
    height: 200
}

export const Circle = Template.bind({})
Circle.args = {
    margin: '15px',
    borderRadius: '50%',
    width: 100,
    height: 100
}

export const NormalDark = Template.bind({})
NormalDark.args = {
    margin: '15px',
    width: 'calc(100% - (15px * 2))',
    height: 200
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
    margin: '15px',
    borderRadius: '50%',
    width: 100,
    height: 100
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const NormalOrange = Template.bind({})
NormalOrange.args = {
    margin: '15px',
    width: 'calc(100% - (15px * 2))',
    height: 200
}
NormalOrange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const CircleOrange = Template.bind({})
CircleOrange.args = {
    margin: '15px',
    borderRadius: '50%',
    width: 100,
    height: 100
}
CircleOrange.decorators = [ThemeDecorator(Theme.ORANGE)]
