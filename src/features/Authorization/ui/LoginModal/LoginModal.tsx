import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal = function (props: LoginModalProps) {
    const {
        className = '',
        isOpen = false,
        onClose
    } = props

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames({}, [className])}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    )
}
