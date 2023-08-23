import { useEffect, useRef, useState } from "react";
import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot, } from "firebase/firestore";
import { db } from "./firebase";
import Message from "./message";
import SendMessage from "./sendMessage";
import axios from "axios";

export default function ChatBox() {
     const [messages, setMessages] = useState([]);
     /*const fetchMessages = async () => {
          try {
               const response = await fetch("http://localhost:3000/chat_app/backend/getMessages.php",
                    { method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: "no-cors", })
                    .then((response) => {
                         //response.json()
                         console.log(response.ok)
                         if (response.ok) {
                              const data = response.json();
                              setMessages(data);
                         } else {
                              console.error('Réponse non OK depuis l\'API', response);
                         }
                    }).catch(console.log('Echec'))
               /*.then(data => setMessages(data))
               .catch(error => console.error('Erreur lors de la récupération des messages', error)
               );

          } catch (error) {
               console.error('Erreur lors de la récupération des messages', error);
          }

     };*/

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
          console.log(messages)
     }, [])



     /*useEffect(() => {
          const fetchMessages = async () => {
               const res = fetch("http://localhost:3000/chat_app/backend/getMessages.php",
                    { method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: "no-cors", }
               )
               res.then(response => {
                    if (response.ok) {
                         console.log('Reussi')
                    } else {
                         console.log('Echec')
                    }
                    response.json()
                    console.log(res)
               })
                    .then(data => console.log(data))
               console.log(res);
          }
          fetchMessages();
     }, []);*/
     //console.log(typeof (messages))
     return (
          <>
               <h1>Bouuuu</h1>
               <h1>Messages</h1>
               <ul>
                    {messages.map(message => (
                         <li key={message.id}>{message.texte}</li>
                    ))}
               </ul>
          </>
     )

}