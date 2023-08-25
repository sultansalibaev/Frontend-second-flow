import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Modal.module.scss'
import React, { type ReactNode, useCallback, useEffect } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = function (props: ModalProps) {
    const {
        className = '',
        children,
        isOpen = false,
        onClose
    } = props

    const closeHandler = useCallback(() => {
        if (onClose != null) {
            onClose()
        }
    }, [onClose])

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') closeHandler()
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen
    }

    const { theme } = useTheme()

    return (
        <Portal>
            <div className={classNames(mods, [classes.Modal, className, classes[theme]])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={stopPropagation}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
