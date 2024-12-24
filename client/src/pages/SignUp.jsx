import React from 'react'
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3 max-w-lg mx-auto flex-grow">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
          <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username" />
          <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" />
          <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" />
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95% disabled:opacity-80%">
            Sign Up
          </button>
        </form>

        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <span className="text-blue-700">Sign In</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp