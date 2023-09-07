import { classNames } from 'shared/lib/classNames/classNames'
import classes from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(function (props: LoginFormProps) {
    const {
        className = ''
    } = props

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { email, password } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByEmail({ email, password }))
    }, [dispatch, password, email])

    return (
        <div className={classNames({}, [classes.LoginForm, className])}>
            <Input
                type="text"
                className={classes.input}
                placeholder={t('Введите username')}
                autofocus
                onChange={onChangeUsername}
                value={email}
            />
            <Input
                type="text"
                className={classes.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={classes.loginBtn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
