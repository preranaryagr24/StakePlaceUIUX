import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const [signup, setSignup] = useState(false);

  const navigate = useNavigate();
  const { signin, login } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return re.test(phone);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (signup) {
      // null value validation
      if (
        !user.name ||
        !user.email ||
        !user.phone ||
        !user.password ||
        !user.cpassword
      ) {
        alert("Please provide all fields");
        return false;
      }
      // email validation
      if (!validateEmail(user.email)) {
        alert("Please Enter Valid Email Address");
        return false;
      }

      //phone number validation
      if (!validatePhone(user.phone)) {
        alert("Please Enter Valid Phone number");
        return false;
      }

      //password match validation
      if (user.password !== user.cpassword) {
        alert("Password Doesn't Match");
        return false;
      }

      const res = await signin(
        user.name,
        user.phone,
        user.email,
        user.password
      );
      console.log(res);
      if (res.status === 201) {
        alert("Signup Successfull");
        navigate("/");
      }

      if (res.status === 400) {
        alert("Signup Failed");
      }
    } else {
      // null value validation
      if (!user.phone || !user.password) {
        alert("Please provide all fields");
        return false;
      }
      //phone number validation
      if (!validatePhone(user.phone)) {
        alert("Please Enter Valid Phone number");
        return false;
      }

      const res = await login(user.phone, user.password);

      if (res.status === 200) {
        alert("Login Successfull");
        navigate("/");
      }

      if (res.status === 400) {
        alert("Login Failed");
      }
    }
  };

  let name, value;
  const handlechange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="bg-[url('/bg.svg')] min-h-[93vh] flex flex-col">
      <div className="mx-auto mt-8">
        <img src="/logo-bg.png" alt="logo" height={100} width={100} />
      </div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-mono">
            {signup ? "Sign up" : "Login"}
          </h1>
          {signup && (
            <input
              value={user.name}
              onChange={handlechange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
            />
          )}

          <input
            onChange={handlechange}
            type="number"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone"
            placeholder="Phone"
          />

          {signup && (
            <input
              onChange={handlechange}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
          )}
          <input
            onChange={handlechange}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          {signup && (
            <input
              onChange={handlechange}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="cpassword"
              placeholder="Confirm Password"
            />
          )}

          <input
            onClick={handlesubmit}
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-500 cursor-pointer font-semibold  text-white hover:bg-green-dark focus:outline-none my-1"
            value={signup ? "Create Account" : "Login"}
          />
        </div>

        <div className="text-grey-dark mt-6">
          {signup ? "Already have an account?" : "Don't have an account ?"}
          <span
            onClick={() => setSignup(!signup)}
            className="no-underline border-b border-blue text-blue cursor-pointer font-bold ml-2"
            href="#"
          >
            {signup ? "Login" : "Signup"}
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default Auth;
