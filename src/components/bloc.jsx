import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import Welcome from './welcome'
import ChatBox from './chatbox'
import SendMessage from './sendMessage'
import Login from './login'
import Registration from './registration'
import NavBar from './navbar'

export default function Bloc() {
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