import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/');
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User already exists",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/');
                }
            })
        })
    }
  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
