import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import NavBar from './components/navbar'
import Welcome from './components/welcome'
import ChatBox from './components/chatbox'
import Message from './components/message'
import SendMessage from './components/sendMessage'


function App() {


    return (
        <>
            <NavBar />
            <ChatBox />
            <SendMessage />
        </>
    )
}

export default App
