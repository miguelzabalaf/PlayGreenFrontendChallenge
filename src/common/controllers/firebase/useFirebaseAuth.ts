import { UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthParams } from './types';
import { trackPromise } from 'react-promise-tracker';
import { auth } from './useFirebase';

function useFirebaseAuth() {

    // Methods
    async function handleLogin(params: AuthParams, callback?: (user: UserCredential) => void) {
        try {
            const userCredential = await trackPromise(signInWithEmailAndPassword(auth, params.email, params.password));
            callback && callback(userCredential);
        } catch (error) {
            console.log('error', error);
        }
    }

    async function handleSignUp(params: AuthParams, callback?: (user: UserCredential) => void) {
        try {
            const userCredential = await trackPromise(createUserWithEmailAndPassword(auth, params.email, params.password));
            callback && callback(userCredential);
        } catch (error) {
            console.log('error', error);
        }
    }

    async function handleLogOut(callback?: () => void): Promise<void> {
        try {
            await auth.signOut();
            callback && callback();
        } catch (error) {
            console.log('error', error);
        }
    }

    return {
        handleLogin,
        handleSignUp,
        handleLogOut
    };

}

export default useFirebaseAuth;