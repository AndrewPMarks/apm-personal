import '../styles/Header.scss'
import { useState, useEffect } from 'react'
import { useLocation, Link, NavLink } from 'react-router-dom'

export const Header = () => {
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
        <div>
            <header
                className={
                    scrollPosition <= 10 && pathname === '/'
                        ? 'heroEnabled'
                        : ''
                }
            >
                <nav>
                    <div className='title'>
                        <Link to='/'>Andrew Marks</Link>
                    </div>

                    <div className='links'>
                        <NavLink
                            exact={true}
                            to='/'
                            activeClassName='active'
                            selected
                        >
                            Home
                        </NavLink>
                        <NavLink to='/projects' activeClassName='active'>
                            Projects
                        </NavLink>
                    </div>
                </nav>

                <div className='hero'>
                    <div className='content'>
                        <div className='title'>
                            Andrew Marks{' '}
                            <span className='sub'>
                                - a developer working on 3,000 things
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
