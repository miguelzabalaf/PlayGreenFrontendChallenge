import { UserCredential, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import useFirebase from './useFirebase';
import { useState } from 'react';
import { AuthLoginParams } from './types';

function useFirebaseAuth() {
    // Sates
    const [userIsSignedIn, onChangeuserIsSignedIn] = useState(false);

    // Instances
    const { app } = useFirebase();
    const auth = getAuth(app);

    // Methods
    function handleLogin(params: AuthLoginParams): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, params.email, params.password);
    }

    function handleLogOut(): Promise<void> {
        return auth.signOut();
    }

    // Observers
    onAuthStateChanged(auth, (user) => {
        if (user) {
            onChangeuserIsSignedIn(true);
        } else {
            onChangeuserIsSignedIn(false);
        }
    });


    return {
        states: {
            userIsSignedIn,
        },
        instances: {
            app,
            auth
        },
        methods: {
            handleLogin,
            handleLogOut
        }
    };

}

export default useFirebaseAuth;