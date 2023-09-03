import React, { useState } from "react"
import axios from "axios";

export default function SendMessage() {
     const [message, setMessage] = useState('');
     const data = new FormData();

     function handleMessageChange(e) {
          setMessage(e.target.value);
     }

     const sendMessage = async (e) => {
          e.preventDefault();

          try {
               let config = {
                    headers: {
                         authorization: "Authorization Token ",
                         "Accept": "application/json",
                         "Content-Type": "multipart/form-data",
                         "Access-Control-Allow-Origin": "*",
                         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                    }
               }
               await axios.post('http://localhost:3000/chat_app/backend/addMessage.php', {
                    auth: 'aia',
                    text: message
               }, config)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
          } catch (err) {
               console.log(err)
          }
          setMessage('');
     };

     return (
          <form action="" className="sticky bottom-0 left-0 right-0 py-4 grid grid-cols-5 bg-white">
               <input type="text" placeholder="Envoyer un message..." onChange={handleMessageChange} value={message} className="col-span-4 bg-gray-200 h-9 px-3 rounded-2xl mx-2" />
               <button type="submit text-center" onClick={sendMessage} className="bg-blue-500 rounded-2xl text-center h-9 mx-2 ">Envoyer</button>
          </form>
     )
}