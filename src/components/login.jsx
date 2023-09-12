import React, { useState } from "react";
import axios from "axios";
import SendMessage from "./sendMessage";
import { useNavigate } from "react-router-dom";

export default function Login() {
     const [email, setEmail] = useState('');
     const [mdp, setMdp] = useState('');
     const navigate = useNavigate();

     const handleGoToRegistration = () => {
          navigate('/registration');
     }

     const handleGoToChatbox = () => {
          navigate('/bloc');
     }

     function handleEmailChange(e) {
          setEmail(e.target.value);
     }

     function handleMdpChange(e) {
          setMdp(e.target.value);
     }

     const sendLoginData = async (e) => {
          e.preventDefault();

          if (email.length >= 8 && mdp.length >= 5) {
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
                    await axios.post('http://localhost:3000/chat_app/backend/login.php', {
                         mail: email,
                         mdp: mdp
                    }, config)
                         .then(res => console.log(res))
                         .catch(err => console.log(err)
                         );

                    const getCustomersData = () => {
                         axios
                              .get("http://localhost:3000/backend/login.php")
                              .then(data => {
                                   console.log(data.data);
                                   //setMessages(data.data);
                                   if (data.status = 200) {
                                        alert('Connexion réussie monsieur');
                                        handleGoToChatbox();
                                   }
                              })
                              .catch(error => console.log(error)
                              );
                    };
                    getCustomersData();
                    //console.log(messages)
               } catch (err) {
                    console.log(err)
               }

          } else {
               alert('Please enter the same passsword!')
          }
     }

     return (
          <>
               <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                              Sign in to your account
                         </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                         <form className="space-y-6" action="#" method="POST">
                              <div>
                                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                   </label>
                                   <div className="mt-2">
                                        <input
                                             id="email"
                                             name="email"
                                             type="email"
                                             value={email}
                                             onChange={handleEmailChange}
                                             autoComplete="email"
                                             required
                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                             Password
                                        </label>
                                        <div className="text-sm">
                                             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                  Forgot password?
                                             </a>
                                        </div>
                                   </div>
                                   <div className="mt-2">
                                        <input
                                             id="password"
                                             name="password"
                                             type="password"
                                             value={mdp}
                                             onChange={handleMdpChange}
                                             autoComplete="current-password"
                                             required
                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <button
                                        type="submit"
                                        onClick={sendLoginData}
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                   >
                                        Sign in
                                   </button>
                              </div>
                         </form>

                         <p className="mt-10 text-center text-sm text-gray-500">
                              Not a member?{' '}
                              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={handleGoToRegistration}>
                                   Register
                              </a>
                         </p>
                    </div>
               </div>
          </>
     )
}