import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleText } from './ArticleText'

export default {
    title: 'shared/ArticleText',
    component: ArticleText,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleText>

const Template: ComponentStory<typeof ArticleText> = (args) => <ArticleText {...args} />

export const Normal = Template.bind({})
Normal.args = {}
