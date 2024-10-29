import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
      Swal.fire({
        title: "Login Successful",
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
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="py-10 bg-base-200">
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
                  onBlur={handleValidateCaptcha}
                  placeholder="Type the captcha above"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn bg-[#d1a054] text-white"
                >
                  Login
                </button>
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
    </>
  );
};

export default Login;
