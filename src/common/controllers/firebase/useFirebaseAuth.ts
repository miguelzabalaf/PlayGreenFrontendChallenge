import { UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import useFirebase from './useFirebase';
import { AuthParams } from './types';
import { trackPromise } from 'react-promise-tracker';

function useFirebaseAuth() {

    // Controllers
    const { auth } = useFirebase();

    // Methods
    function handleLogin(params: AuthParams): Promise<UserCredential> {
        return trackPromise(signInWithEmailAndPassword(auth, params.email, params.password));
    }

    function handleSignUp(params: AuthParams): Promise<UserCredential> {
        return trackPromise(createUserWithEmailAndPassword(auth, params.email, params.password));
    }

    function handleLogOut(): Promise<void> {
        return trackPromise(auth.signOut());
    }

    return {
        handleLogin,
        handleSignUp,
        handleLogOut
    };

}

export default useFirebaseAuth;