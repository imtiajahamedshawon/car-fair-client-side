import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password, name, history, swal2) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, name }
                setUser(newUser)
                // save user to the database
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error.message)
                    })
                swal2()
                history.push('/home')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const login = (email, password, location, history, swal2) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const redirect = location?.state?.from || '/home'
                swal2()
                history.push(redirect)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken => {
                    // console.log(idToken);
                    setToken(idToken);
                })
              
            }
            else {
                setUser({})
            }
            setIsLoading(false)
            
        })
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        createUser,
        login,
        isLoading,
        error,
        signInWithGoogle,
        logOut

    }
}
export default useFirebase;