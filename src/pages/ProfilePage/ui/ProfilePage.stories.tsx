import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AvatarImg from 'shared/assets/tests/storybook.jpg'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            email: 'in7678523@gmail.com',
            username: 'Sula',
            balance: 0,
            phone: '87789857552',
            avatar: AvatarImg,
            gender: 'male',
            firstname: 'Sultan',
            lastname: 'Salibaev',
            age: 20,
            currency: Currency.RUB,
            country: Country.Kazakhstan,
            city: 'Semey'
        }
    }
})]

export const Dark = Template.bind({})
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                email: 'in7678523@gmail.com',
                username: 'Sula',
                balance: 0,
                phone: '87789857552',
                avatar: AvatarImg,
                gender: 'male',
                firstname: 'Sultan',
                lastname: 'Salibaev',
                age: 20,
                currency: Currency.RUB,
                country: Country.Kazakhstan,
                city: 'Semey'
            }
        }
    })
]
