import { createContext, useContext, useState, useEffect } from "react";
import firebase from "./firebase";
import axios from "axios";

const authContext = createContext({
  auth: null,
  loading: true,
  signInWithTwitter: async () => {},
  signOut: async () => {},
});

const formatAuthState = (user) => ({
  uid: user.uid,
  email: user.email,
  token: null,
  isLogin: false,
});

function useProvideAuth() {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Callback function used for firebase.auth.onAuthStateChanged().
   * Takes the user object returned and formats it for my state.
   * We fetch the idToken and append it to my auth state and store it.
   */
  const handleAuthChange = async (authState) => {
    if (!authState) {
      return;
    }

    // Formats response into my required state.
    const formattedAuth = formatAuthState(authState);
    // Fetch firebase auth ID Token.
    formattedAuth.token = await authState.getIdToken();
    formattedAuth.isLogin = true;
    // Stores auth into state.
    setAuth(formattedAuth);
    // Sets loading state to false.
    setLoading(false);
  };

  /**
   * Callback function used for response from firebase OAuth.
   * Store user object returned in firestore.
   * @param firebase User Credential
   */
  // const signedIn = async (response) => {
  //   if (!response.user) {
  //     throw new Error("No User");
  //   }

  //   // Format user into my required state.
  //   const authedUser = formatAuthState(response.user);
  //   // firestore database function
  //   // createUser(authedUser.uid, authedUser);
  // };

  /**
   * Callback for when firebase signOut.
   * Sets auth state to null and loading to true.
   */
  const clear = () => {
    setAuth(null);
    setLoading(true);
  };

  const signupWithEmailAndPassword = async (
    email,
    password,
    name,
    course,
    city,
    number
  ) => {
    setLoading(true);
    try {
      const userCreds = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const createUser = await axios.post("/api/createUser", {
        email,
        name,
        city,
        userId: userCreds.user.uid,
        course,
        number,
      });
      // console.log(userCreds.user.uid);

      return {
        data: userCreds.user,
        isError: false,
      };
    } catch (err) {
      console.log(err);

      throw err;
      // return {
      //   data: err,
      //   isError: true,
      // };
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  /**
   * Calls firebase signOut and with clear callback to reset state.
   */
  const signOut = () => {
    return firebase.auth().signOut().then(clear);
  };

  /**
   * Watches for state change for firebase auth and calls the handleAuthChange callback
   * on every change.
   */
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthChange);
    return () => unsubscribe();
  }, []);

  // returns state values and callbacks for signIn and signOut.
  return {
    auth,
    loading,
    signInWithEmailAndPassword,
    signupWithEmailAndPassword,
    // signInWithGoogle,
    signOut,
  };
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
