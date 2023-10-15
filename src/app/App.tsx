import React, { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { getUserData } from 'entities/User/model/services/getUserData/getUserData'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch])

    return (
        <div className={classNames({}, ['app'])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
