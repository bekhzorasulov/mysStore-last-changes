import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fireBase/firebaseConfig";
import { toast } from "react-toastify";

import { useGlobalContext } from "./useGlobalContext";

export const useSignUp = () => {
  const { dispatch } = useGlobalContext();
  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { signUpWithGoogle };
};
