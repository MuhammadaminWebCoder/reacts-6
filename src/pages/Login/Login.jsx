import Input from "../../components/Input";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const {formData,setToken,setUser} = useContext(Context)
  const [showHidePassword,setShowHidePassword] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eValue = e.target.emailName.value.split(' ').join('');
    const pValue = e.target.password.value;
    const user = formData.find(s =>  (eValue === s.email || eValue === s.phone) && pValue === s.password);
    if (user) {
      setUser(user)
      toast.success(`Hi everyone ${user.name}`);
      setTimeout(() => {
        navigate('/');
        e.target.reset();
        setToken(formData);
      }, 1000);
    }
    else{
      toast.error(`error input errors`);
    }
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
            <Input type={"text"} name={"emailName"} placeholder={"Phone number, email address"} />
            <div className="relative">
              <Input type={showHidePassword == true?"text":"password"} name={"password"} placeholder={"Password"} />
              {showHidePassword == true?<i onClick={() => setShowHidePassword(!showHidePassword)} className="fa-regular absolute right-4 top-[18px] fa-eye-slash"></i>
              :<i onClick={() => setShowHidePassword(!showHidePassword)} className="fa-regular absolute right-4 top-[18px] fa-eye"></i>}
            </div>
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
