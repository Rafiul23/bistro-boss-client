import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginImage from '../../assets/others/authentication1.png';

const Login = () => {
    const [hidden, setHidden] = useState(true);

    const handleLogin = e =>{

    }

    return (
        <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full flex justify-center items-center">
          <img src={loginImage} alt="login image" width={500} height={500} />
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <form className="card-body" onSubmit={handleLogin}>
            <h2 className="text-3xl text-center text-amber-500 py-6 font-bold">
              Login Now!
            </h2>
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
                New to Bistro Boss? Please,{" "}
                <Link
                  to="/register"
                  className="text-amber-500 font-bold underline"
                >
                  Register!
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
      </div>
    </div>
    );
};

export default Login;