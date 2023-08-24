import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import NavBar from './components/navbar'
import Welcome from './components/welcome'
import ChatBox from './components/chatbox'
import SendMessage from './components/sendMessage'


function App() {


    return (
        <>
            <div className="m-auto w-3/6">
                <NavBar />
                <ChatBox />
                <SendMessage />
            </div>
        </>
    )
}

export default App
