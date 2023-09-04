import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function NavBar() {

     const [user] = useAuthState(auth);

     const signIn = () => {
          const provider = new GoogleAuthProvider();
          signInWithRedirect(auth, provider);
          //setUser(true);
     }

     const signOut = () => {
          //setUser(false);
          auth.signOut();
     }

     return (
          <>
               <div className="sticky top-0 left-0 right-0 ">
                    <nav className='flex bg-blue-500 py-3'>
                         <div className='mx-auto justify-center'>
                              <h1>Chat-app by devMeno</h1>
                         </div>
                    </nav>
               </div>
          </>
     )
}