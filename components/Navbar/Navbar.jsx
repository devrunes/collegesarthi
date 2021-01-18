import React from 'react'
import { useAuth } from '../../lib/auth';


export default function Navbar() {
    const { auth, signOut, signInWithGoogle } = useAuth();

    return (
        <div>
            {auth ? (
        <div>
          {/* <Link href="/">
            <a>Dashboard link.</a>
          </Link>
           */}
          <div>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        </div>
      ) : (
        <button onClick={() => signInWithGoogle()}>Sign In</button>
      )}
        </div>
    )
}
