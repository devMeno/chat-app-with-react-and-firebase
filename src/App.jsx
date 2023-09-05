import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import NavBar from './components/navbar'
import Welcome from './components/welcome'
import ChatBox from './components/chatbox'
import SendMessage from './components/sendMessage'
import Login from './components/login'
import Registration from './components/registration'


function App() {


    return (
        <>
            <div className="m-auto w-3/6">
                <Login />
            </div>
        </>
    )
}

export default App
