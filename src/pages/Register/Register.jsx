import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import registerImage from '../../assets/others/authentication2.png';

const Register = () => {
    const [hidden, setHidden] = useState(true);

    const handleRegister = e =>{

    }

    return (
        <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="card bg-base-100 w-full shadow-xl">
          <form className="card-body" onSubmit={handleRegister}>
            <h2 className="text-3xl text-center text-amber-500 py-6 font-bold">
              Register Now!
            </h2>
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
              />
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
              />
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
              />
              <p className="pt-6">
                Already have an account? Please,{" "}
                <Link
                  to="/login"
                  className="text-amber-500 font-bold underline"
                >
                  Login!
                </Link>{" "}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-500 text-white">Login</button>
            </div>
          </form>

          <div className="relative -top-[195px]">
            <div className="absolute right-16">
              <button onClick={() => setHidden(!hidden)}>
                {hidden ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>
          </div>
          {/* <p className="text-center my-2">Or</p>
          <div className="py-5 text-center">
            <SocialLogin></SocialLogin>
          </div> */}
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={registerImage} alt="login image" width={500} height={500} />
        </div>
      </div>
    </div>
    );
};

export default Register;