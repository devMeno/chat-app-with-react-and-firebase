import React, { useState } from "react"
import { auth, db } from "./firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

export default function SendMessage() {
     const [message, setMessage] = useState('');

     function handleMessageChange(e) {
          setMessage(e.target.value);
     }

     const sendMessage = async (e) => {
          e.preventDefault();
          if (message.trim === "") {
               return alert('Vous ne pouvez pas envoyer un message ne contenant aucun caractère !');
          }
          const { uid, displayName, photoURL } = auth.currentUser;
          await addDoc(collection(db, "messages"), {
               text: message,
               name: displayName,
               avatar: photoURL,
               createdAt: serverTimestamp(),
               uid
          });
          setMessage('');
     };

     return (
          <form action="">
               <input type="text" onChange={handleMessageChange} value={message} />
               <button type="submit" onClick={sendMessage}>Envoyer</button>
          </form>
     )
} 