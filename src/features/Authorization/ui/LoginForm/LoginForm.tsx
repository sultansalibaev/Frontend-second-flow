import { classNames } from 'shared/lib/classNames/classNames'
import classes from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
// import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getLoginEmail } from 'features/Authorization/model/selectors/getLoginEmail/getLoginEmail'
import { getLoginErrors } from 'features/Authorization/model/selectors/getLoginErrors/getLoginErrors'
import { getLoginIsLoading } from 'features/Authorization/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from 'features/Authorization/model/selectors/getLoginPassword/getLoginPassword'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(function (props: LoginFormProps) {
    const {
        className = '',
        onSuccess
    } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    // const {
    //     email,
    //     password,
    //     errors,
    //     isLoading
    // } = useSelector(getLoginState)

    const email = useSelector(getLoginEmail)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const errors = useSelector(getLoginErrors)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByEmail({ email, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
        console.log(result)
    }, [onSuccess, dispatch, password, email])

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const emailError = `email - ${errors?.email?.map(text => t(text))?.join(', ')}`

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const passwordError = `password - ${errors?.password?.map(text => t(text))?.join(', ')}`

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames({}, [classes.LoginForm, className])}>
                <Text title={t('Форма авторизации')} />
                {Boolean(errors?.message) && <Text theme={TextTheme.ERROR} text={errors?.message}/>}
                {Boolean(errors?.email) && <Text theme={TextTheme.ERROR} text={emailError}/>}
                {Boolean(errors?.password) && <Text theme={TextTheme.ERROR} text={passwordError}/>}
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
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
