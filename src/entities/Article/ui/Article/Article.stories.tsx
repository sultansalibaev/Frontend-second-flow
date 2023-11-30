import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Article } from './Article'

export default {
    title: 'shared/Article',
    component: Article,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Article>

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />

export const Normal = Template.bind({})
Normal.args = {}
