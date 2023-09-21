import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function UsersList() {
     const [users, setUsers] = useState([]);

     useEffect(() => {
          const getAllUsersList = () => {
               axios
                    .get("http://localhost:3000/backend/getAllUsers.php")
                    .then(users => {
                         console.log(users.data);
                         setUsers(users.data);
                    })
                    .catch(error => console.log(error));
          };
          getAllUsersList();
          //console.log(messages);
     })

     return (
          <>
               <div>
                    <ul>
                         {users.map(user => (
                              <li>{user.username}</li>
                         ))}
                    </ul>
               </div>
          </>
     )
}