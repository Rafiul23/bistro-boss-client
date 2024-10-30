import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }
  return (
    <div>
      <div>
        <button className="btn">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
