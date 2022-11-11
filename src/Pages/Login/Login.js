import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        form.reset()
        navigate(from, { replace: true })
        if (loading) {
          return <button className="btn loading">loading...</button>
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    document.title = "Login"
  }, [])
  return (
    <div className="hero w-full">
      <div className="hero-content flex-col gap-20 grid md:grid-cols-2 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4 rounded-md" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
            <div>
              <h2 className="text-lg text-center">
                Create an Account
                <Link className="text-success" to={"/signup"}>
                  Sign Up
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
