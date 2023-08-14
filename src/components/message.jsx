import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Message({ message }) {
     const [user] = useAuthState(auth);

     return (
          <div>
               <img src={message.avatar} alt="avatar" className="w-5 y-5" />
               <div>
                    <p>{message.name}</p>
                    <p>{message.text}</p>
               </div>
          </div>
     )
}