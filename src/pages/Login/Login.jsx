import Input from "../../components/Input";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const {formData,setToken} = useContext(Context)
  
  console.log(formData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const eValue = e.target.emailName.value;
    const pValue = e.target.password.value;
    formData.map(s => {
      if (eValue == s.email && pValue == s.password) {
        console.log(s.email,s.password);
        toast.success(`HI evrione ${s.name}`)
        e.target.reset();
        setToken(formData)
      }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        <i className="fa-brands fa-twitter text-center text-4xl block text-blue-500"></i>
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <Toaster
            position="top-center"
            reverseOrder={true}
          />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input type={"email"} name={"emailName"} placeholder={"Phone number, email address"} />
            <Input type={"password"} name={"password"} placeholder={"Password"} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold rounded-full py-3 px-4 hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <div className="flex justify-between">
            <div className="text-[#1DA1F2] text-sm cursor-pointer hover:underline">
              Forgot password?
            </div>
            <Link to="/register" className="text-[#1DA1F2] text-sm cursor-pointer hover:underline">
              Sign up to Twitter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
