import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
     const [email, setEmail] = useState('');
     const [username, setUsername] = useState('');
     const [mdp, setMdp] = useState('');
     const [mdpConfirm, setMdpConfirm] = useState('');
     const navigate = useNavigate();

     const handleGoToLogin = () => {
          navigate('/');
     }

     function handleEmailChange(e) {
          setEmail(e.target.value);
     }

     function handleUsernameChange(e) {
          setUsername(e.target.value);
     }

     function handleMdpChange(e) {
          setMdp(e.target.value);
     }

     function handleMdpConfirmChange(e) {
          setMdpConfirm(e.target.value);
     }


     const sendRegistrationData = async (e) => {
          e.preventDefault();

          if (mdp === mdpConfirm) {
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
                    await axios.post('http://localhost:3000/chat_app/backend/registration.php', {
                         mail: email,
                         username: username,
                         mdp: mdp
                    }, config)
                         .then(res => console.log(res))
                         .catch(err => console.log(err))
               } catch (err) {
                    console.log(err)
               }
               setEmail('');
               setUsername('');
               setMdp('');
               setMdpConfirm('');
               handleGoToLogin();
          } else {
               alert('Please enter the same passsword!');
          }
     }

     return (
          <>
               <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="w-5/6 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                   </label>
                                   <div className="mt-2">
                                        <input
                                             id="user"
                                             name="email"
                                             type="text"
                                             value={username}
                                             onChange={handleUsernameChange}
                                             required
                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                   </label>
                                   <div className="mt-2">
                                        <input
                                             id="password"
                                             name="email"
                                             type="password"
                                             value={mdp}
                                             onChange={handleMdpChange}
                                             required
                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password confirmation
                                   </label>
                                   <div className="mt-2">
                                        <input
                                             id="passwordConf"
                                             name="email"
                                             type="password"
                                             value={mdpConfirm}
                                             onChange={handleMdpConfirmChange}
                                             autoComplete="email"
                                             required
                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <button
                                        type="submit"
                                        onClick={sendRegistrationData}
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                   >
                                        Sign up
                                   </button>
                              </div>
                         </form>

                         <p className="mt-10 text-center text-sm text-gray-500">
                              Have an account?
                              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                   Login
                              </a>
                         </p>
                    </div>
               </div>
          </>
     )
}