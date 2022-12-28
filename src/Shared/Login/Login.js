import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle register
  const handleRegister = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle google sign in
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="w-4/5 md:w-2/5 my-14 p-4 mx-auto border rounded shadow">
        <h2 className="text-center py-4 text-lg font-semibold">Login</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            <div className="my-2">
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                })}
                id=""
                className="w-full py-2 rounded border px-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="my-2">
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required",
                })}
                id=""
                className="w-full py-2 rounded border px-2"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="w-full md:w-3/5 mx-auto text-center my-4">
              <button
                className="py-2 bg-blue-700 text-white px-8 rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p>
          Haven't create account yet?
          <Link className="text-blue-700" to="/register">
            Please create account!
          </Link>
        </p>
        <div className="w-full md:w-3/5 mx-auto text-center my-4">
          <button
            className="py-2 bg-slate-700 text-white px-8 rounded"
            onClick={handleGoogle}
          >
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
