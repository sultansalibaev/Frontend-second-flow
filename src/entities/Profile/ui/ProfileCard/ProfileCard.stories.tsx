import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
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

export const WithError = Template.bind({})
WithError.args = {
    error: 'true'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}
