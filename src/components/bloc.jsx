import { useState } from 'react'
import ChatBox from './chatbox'
import SendMessage from './sendMessage'
import NavBar from './navbar'
import UsersList from './users'

export default function Bloc() {
     return (
          <>
               <div className="flex h-full">
                    <div className="m-auto w-3/12">
                         <UsersList />
                    </div>
                    <div className=" w-6/12">
                         <NavBar />
                         <ChatBox />
                         <SendMessage />
                    </div>
                    <div className="m-auto w-3/12 bg-orange-100">Bonjour</div>
               </div>
          </>
     )
}