import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Modal.module.scss'
import React, { type ReactNode, useCallback, useEffect, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = function (props: ModalProps) {
    const {
        className = '',
        children,
        isOpen = false,
        onClose,
        lazy
    } = props

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

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

    if (lazy === true && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(mods, [classes.Modal, className])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={stopPropagation}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
