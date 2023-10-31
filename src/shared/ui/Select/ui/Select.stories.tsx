import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'First option' },
        { value: '2', content: 'Second option' }
    ]
}
