import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Welcome from "./welcome";

export default function ChatBox() {
     const [messages, setMessages] = useState([]);
     const [user, setUser] = useState();


     useEffect(() => {
          const getCustomersData = () => {
               axios
                    .get("http://localhost:3000/backend/getMessages.php")
                    .then(data => {
                         console.log(data.data);
                         setMessages(data.data);
                    })
                    .catch(error => console.log(error));
          };
          getCustomersData();
          console.log(messages);
     })

     return (
          <>
               <div className="flex m-auto">
                    <ul>
                         {() => {
                              if (messages.length > 0) {
                                   messages.map(message => (
                                        <div className={(message.auteur === 'aia' ? 'flex justify-end' : '')}>
                                             <li className={"w-fit bg-blue-300 m-1 p-2 rounded-lg" + (message.auteur === 'aia' ? ' bg-blue-500 text-right' : ' bg-gray-200')} key={message.id}>{message.texte}</li>
                                        </div>
                                   ))
                              }
                         }}
                    </ul>
               </div>
          </>
     )
}