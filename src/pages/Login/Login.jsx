import { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center gap-10 mx-32 my-20">
      <div className="flex-1">
        <img className="mx-auto" src={login} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl text-center w-3/4">Login</h2>
        <form className="card-body w-3/4" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <p>
          New to AutoFix Pro? <Link to={"/register"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
