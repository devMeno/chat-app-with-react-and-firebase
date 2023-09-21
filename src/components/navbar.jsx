import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

export default function NavBar() {

     const [user] = useAuthState(auth);


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