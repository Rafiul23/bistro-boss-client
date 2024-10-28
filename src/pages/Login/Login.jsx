import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginImage from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const [hidden, setHidden] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const {signIn} = useContext(AuthContext);

    useEffect(()=>{
      loadCaptchaEnginge(6); 
    }, [])

    const handleValidateCaptcha = ()=>{
      const user_captcha_value = captchaRef.current.value;
      if(validateCaptcha(user_captcha_value)){
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }

    const handleLogin = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
    }

    return (
        <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full flex justify-center items-center">
          <img src={loginImage} alt="login image" width={500} height={500} />
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <form className="card-body" onSubmit={handleLogin}>
            <h2 className="text-3xl text-center py-6 font-bold">
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
                  to="/signup"
                  className="text-[#d1a054] font-bold underline"
                >
                  Sign Up!
                </Link>{" "}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                placeholder="Type the captcha above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-4">Validate Captcha</button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn bg-[#d1a054] text-white">Login</button>
            </div>
          </form>

          <div className="relative -top-[360px]">
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