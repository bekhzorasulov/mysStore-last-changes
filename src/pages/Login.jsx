import { useSignUp } from "../hooks/useSignUp";

function Login() {
  const { signUpWithGoogle } = useSignUp();
  return (
    <div className="h-screen grid place-items-center">
      <button onClick={signUpWithGoogle} className="btn btn-success">
        Google
      </button>
    </div>
  );
}

export default Login;
