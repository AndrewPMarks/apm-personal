import '../styles/App.scss'
// import { firebaseInit } from '../firebase'
import { Header } from './Header'
import { Switch, Route } from 'react-router-dom'

export const App = () => {
    // firebaseInit()

    return (
        <div className='App'>
            <Header></Header>
            <Switch>
                <Route path='/projects'>Projects</Route>
                <Route path='/'>Home</Route>
            </Switch>
        </div>
    )
}
