import './styles/App.scss'
// import { firebaseInit } from '../firebase'
import { Header } from './components/Header'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Projects } from './pages/Projects'
import { Home } from './pages/Home'

export const App = () => {
    // firebaseInit()

    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
    const { pathname } = useLocation()

    const onScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
    }, [])

    return (
        <div
            className={
                scrollPosition <= 10 && pathname === '/' ? 'heroEnabled' : ''
            }
        >
            <Header />
            <section className='content'>
                {' '}
                <Switch>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </section>
        </div>
    )
}
