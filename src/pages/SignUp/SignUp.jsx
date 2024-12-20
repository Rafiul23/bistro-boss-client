import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);
  const {createUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      const userInfo = {
        name,
        email
      }
      // console.log(user);
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            title: "New user created successfully",
            showClass: {
              popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
            },
            hideClass: {
              popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
            },
          });
          navigate('/');
        }
      })
     
    })
  };

  return (
    <>
    <Helmet>
      <title>Bistro Boss | Sign Up</title>
    </Helmet>
    <div className="py-10 bg-base-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 w-full shadow-xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-center py-6 font-bold">Sign Up!</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                name="name"
                className="input input-bordered"
                required
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600 mt-2">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 mt-2">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={hidden ? "password" : "text"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
                {...register("password", 
                  {
                   required: true,
                   minLength: 6,
                   maxLength: 20,
                   pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/
                  })}
              />
              {errors.password?.type === 'required' && (
                <span className="text-red-600 mt-2">Password is required</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-600 mt-2">Password must be at least 6 characters</span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span className="text-red-600 mt-2">Password should not be more than 20 characters</span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-600 mt-2">Password must have one uppercase, one lowercase, one number and one special character</span>
              )}
              <p className="pt-6">
                Already have an account? Please,{" "}
                <Link
                  to="/login"
                  className="text-[#d1a054] font-bold underline"
                >
                  Login!
                </Link>{" "}
              </p>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#d1a054] text-white">Sign Up</button>
            </div>
          </form>

          <div className="relative -top-[195px]">
            <div className="absolute right-16">
              <button onClick={() => setHidden(!hidden)}>
                {hidden ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>
          </div>
          <p className="text-center my-2 divider">Or</p>
          <div className="py-5 text-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={signUpImage} alt="signup image" width={500} height={500} />
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
