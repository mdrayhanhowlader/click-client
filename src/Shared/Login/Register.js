import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthProvider";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    // console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="w-4/5 md:w-2/5 my-32 p-4 mx-auto border rounded shadow">
        <h2 className="text-center py-4 text-lg font-semibold">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            <div className="my-2">
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                id=""
                placeholder="Enter Name"
                className="w-full py-2 rounded border px-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
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
                Create Account
              </button>
            </div>
          </div>
        </form>
        <p>
          Already have an account?
          <Link className="text-blue-700" to="/login">
            Please Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
