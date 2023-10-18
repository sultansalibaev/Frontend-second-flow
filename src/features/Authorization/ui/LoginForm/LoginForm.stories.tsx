import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    loginForm: { email: 'in7678523@gmail.com', password: '123456789' }
})]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [StoreDecorator({
    loginForm: {
        email: 'in7678523@gmail.com',
        password: '123456789',
        errors: {
            message: 'Некорректный email или пароль'
        }
    }
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
    loginForm: {
        email: 'in7678523@gmail.com',
        password: '123456789',
        isLoading: true
    }
})]
