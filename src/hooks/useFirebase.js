import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
    const [user, setUser ] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setIsLoading(false);
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to database
            saveUser(email, name);

            updateProfile(auth.currentUser,{
              displayName: name
            }).then(() =>{

            }).catch((error) => {

            });
            history.replace('/');
            // ...
          })
          .catch((error) => {
            setIsLoading(false);
            setAuthError(error.message);
            // ..
          })
          .finally(() => setIsLoading(false));
        }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
           const destination = location?.state?.from || '/';
           history.replace(destination);
           setIsLoading(false);
           setAuthError('');
      
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError('');
      }).catch((error) =>{
          setAuthError(error.message);
      }).finally(() => setIsLoading(false));
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
              setUser(user);
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [auth])

    const logout = ()=>{
        setIsLoading(true);
        signOut(auth).then(() =>{
            setIsLoading(false);
        }).catch((error) =>{
            setIsLoading(false);
            })
            .finally(()=> setIsLoading(false));
    } 
    
    const saveUser = (email, displayName) =>{
       const user = {email, displayName};
       fetch('http://localhost:5000/users',{
         method: 'POST',
         headers:{
           'content-type': 'application/json',
         },
         body:JSON.stringify(user)
       })
       .then()
    }
         

    return{
        user,
        isLoading,
        registerUser,
        logout,
        loginUser,
        authError,
        signInWithGoogle
    }
}

export default useFirebase;