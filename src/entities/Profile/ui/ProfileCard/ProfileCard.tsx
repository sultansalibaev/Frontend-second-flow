import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar'

import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void

}

export const ProfileCard = function (props: ProfileCardProps) {
    const {
        className = '',
        data,
        isLoading = false,
        readonly = true,
        error = '',
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={classNames({}, [
                classes.ProfileCard,
                classes.loading,
                className
            ])}>
                <Loader/>
            </div>
        )
    }

    if (error !== '') {
        return (
            <div className={classNames({}, [
                classes.ProfileCard,
                classes.error,
                className
            ])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [classes.editing]: !readonly
    }

    return (
        <div className={classNames(mods, [classes.ProfileCard, className])}>
            {data?.avatar != null && (
                <div className={classNames({}, [classes.avatarWrapper])}>
                    <Avatar src={data?.avatar} />
                </div>
            )}
            <Input
                value={data?.firstname}
                placeholder={t('Ваше имя')}
                className={classes.input}
                onChange={onChangeFirstName}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваше фамилия')}
                className={classes.input}
                onChange={onChangeLastName}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваше возраст')}
                className={classes.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={classes.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={classes.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={classes.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={classes.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={classes.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    )
}
