import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero molestias, vitae? Architecto aspernatur eaque enim id illo itaque,minima, nisi non placeat repudiandae, tenetur ullam voluptas voluptatem? Blanditiis laudantium, placeat.'
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero molestias, vitae? Architecto aspernatur eaque enim id illo itaque,minima, nisi non placeat repudiandae, tenetur ullam voluptas voluptatem? Blanditiis laudantium, placeat.'
}
