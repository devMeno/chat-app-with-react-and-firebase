import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import NavBar from './components/navbar'
import Welcome from './components/welcome'
import ChatBox from './components/chatbox'
import SendMessage from './components/sendMessage'
import Login from './components/login'
import Registration from './components/registration'
import { Route, Routes } from 'react-router-dom'
import Bloc from './components/bloc'
import UsersList from './components/users'


function App() {
    return (
        <Routes>
            <Route path='/' Component={Login} />
            <Route path='/registration' Component={Registration} />
            <Route path='/bloc' Component={Bloc} />
        </Routes>
    )
}

export default App


//<Routes>
//<Route path='/' Component={Login} />
//<Route path='/registration' Component={Registration} />
//<Route path='/bloc' Component={Bloc} />
//</Routes>