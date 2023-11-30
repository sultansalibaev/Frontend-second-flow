import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleCode } from './ArticleCode'

export default {
    title: 'shared/ArticleCode',
    component: ArticleCode,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleCode>

const Template: ComponentStory<typeof ArticleCode> = (args) => <ArticleCode {...args} />

export const Normal = Template.bind({})
Normal.args = {}
