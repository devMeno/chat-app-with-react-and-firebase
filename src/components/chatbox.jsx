import { useEffect, useRef, useState } from "react";
import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot, } from "firebase/firestore";
import { db } from "./firebase";
import SendMessage from "./sendMessage";
import axios from "axios";

export default function ChatBox() {
     const [messages, setMessages] = useState([]);
     const [user, setUser] = useState();



     useEffect(() => {
          const getCustomersData = () => {
               axios
                    .get("http://localhost:3000/chat_app/backend/getMessages.php")
                    .then(data => {
                         //console.log(data.data);
                         setMessages(data.data);
                    })
                    .catch(error => console.log(error));
          };
          getCustomersData();
          //console.log(messages);
     })

     useEffect(() => {
          const getUsersData = () => {
               axios
                    .get("http://localhost:3000/chat_app/backend/login.php")
                    .then(infos => {
                         console.log(infos.data);
                         if (infos.status = 200) {
                              //setUser(infos.data);
                              console.log(infos)
                         }
                    })
                    .catch(error => console.log(error)
                    );
          };
          getUsersData();
     })


     return (
          <>
               <div className="flex m-auto">
                    <ul>
                         {messages.map(message => (
                              <div className={(message.auteur === 'aia' ? 'flex justify-end' : '')}>
                                   <li className={"w-fit bg-blue-300 m-1 p-2 rounded-lg" + (message.auteur === 'aia' ? ' bg-blue-500 text-right' : ' bg-gray-200')} key={message.id}>{message.texte}</li>
                              </div>
                         ))}
                    </ul>
               </div>
          </>
     )
}