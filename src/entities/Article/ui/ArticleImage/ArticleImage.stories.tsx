import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleImage } from './ArticleImage'

export default {
    title: 'shared/ArticleImage',
    component: ArticleImage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleImage>

const Template: ComponentStory<typeof ArticleImage> = (args) => <ArticleImage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
