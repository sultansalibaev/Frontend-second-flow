import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleTitle } from './ArticleTitle'

export default {
    title: 'shared/ArticleTitle',
    component: ArticleTitle,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleTitle>

const Template: ComponentStory<typeof ArticleTitle> = (args) => <ArticleTitle {...args} />

export const Normal = Template.bind({})
Normal.args = {}
