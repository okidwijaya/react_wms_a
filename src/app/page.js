"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { loginAction } from "@/redux/actions/auth";
import { connect } from "react-redux";
import { loginAuth, registerAuth } from "@/utils/auth";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const resetFromAuth = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  const loginHandle = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    loginAuth(body)
      .then((response) => {
        console.log(response.data);
        resetFromAuth();
        router.push("/pages/dashboard");
        toast.success("Login Success", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
        resetFromAuth();
        toast.error("Wrong Email/Password", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const registrationHandle = (e) => {
    e.preventDefault();
    const body = {
      user_name: `${firstName}, ${lastName}`,
      email: email,
      password: password,
    };

    console.log('Registration', body);

    registerAuth(body)
      .then((response) => {
        resetFromAuth();
        console.log(response.data);
        setIsSignIn(true);
        toast.success("Registration Success, Please Login.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
        resetFromAuth();
        toast.error("Registration Failed, Try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="items-center justify-items-center flex min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="w-full max-w-[250px] mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-black">Welcome</h2>
      <Link href="/pages/dashboard"
              className="font-semibold w-full py-2 px-3 max-w-full mt-4 bg-[#121212] text-white mr-0 ml-auto border h-fit border-[#121212] rounded-md"
            >
              Go to dashboard
      </Link>
      </div>
      <div className="hidden">
      {isSignIn && (
        <div className="w-full max-w-md mx-auto flex items-center justify-center">
          <form
            onSubmit={loginHandle}
            className="w-full flex flex-col items-start text-[#121212] border border-[#121212] rounded-md p-4"
          >
            <div className="w-full flex justify-between pb-6">
              <div className="w-full">
                <h2 className="text-xl font-semibold">Login</h2>
                <p className="text-sm">Continue to dashboard</p>
              </div>
              <button
                onClick={() => setIsSignIn(false)}
                type="button"
                className="font-semibold w-full py-1 px-3 max-w-fit mr-0 ml-auto border h-fit border-[#121212] rounded-md"
              >
                Sign Up
              </button>
            </div>
            <label className="mb-1">Email</label>
            <input
              className="p-2 w-full border border-[#121212] rounded-md"
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mb-1 mt-2">Password</label>
            <input
              className="p-2 w-full border border-[#121212] rounded-md"
              type="text"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="font-semibold w-full py-2 px-3 max-w-full mt-4 bg-[#121212] text-white mr-0 ml-auto border h-fit border-[#121212] rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
      )}

      {!isSignIn && (
        <div className="w-full max-w-md mx-auto flex items-center justify-center">
          <form
            onSubmit={registrationHandle}
            className="w-full flex flex-col items-start text-[#121212] border border-[#121212] rounded-md p-4"
          >
            <div className="w-full flex justify-between pb-6">
              <div className="w-full">
                <h2 className="text-xl font-semibold">Register</h2>
                <p className="text-sm">Create New Account</p>
              </div>
              <button
                onClick={() => setIsSignIn(true)}
                type="button"
                className="font-semibold w-full py-1 px-3 max-w-fit mr-0 ml-auto border h-fit border-[#121212] rounded-md"
              >
                Sign In
              </button>
            </div>

            <div className="grid grid-cols-2 w-full gap-2 mb-2">
              <div className="w-full flex flex-col items-start">
                <label>First Name</label>
                <input
                  className="p-2 w-full border border-[#121212] rounded-md"
                  type="text"
                  required
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-start">
                <label>Last Name</label>
                <input
                  className="p-2 w-full border border-[#121212] rounded-md"
                  type="text"
                  required
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <label className="mb-1">Email</label>
            <input
              className="p-2 w-full border border-[#121212] rounded-md"
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mb-1 mt-2">Password</label>
            <input
              className="p-2 w-full border border-[#121212] rounded-md"
              type="text"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="font-semibold w-full py-2 px-3 max-w-full mt-4 bg-[#121212] text-white mr-0 ml-auto border h-fit border-[#121212] rounded-md"
                type="submit"
              >
                Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
}
