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
    const eValue = e.target.name.value;
    const pValue = e.target.password.value;
    const user = formData.find(s =>  eValue === s.name && pValue === s.password);
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
     <h1 className="text-[36px] font-[600] text-center ">Welcome, Log into you account</h1>
  <div className="bg-white h-[382px] w-[512px] mt-10 flex justify-center items-center">
     <Toaster position="top-center" reverseOrder={true} />
     <form onSubmit={handleSubmit} className="w-[248px]">
      <p className="text-[#667085] text-center">It is our great pleasure to have you on board! </p>
       <div className="space-y-4 my-5">
         <Input type={"name"} name={"name"} placeholder={"Enter your Login"} />
         <div className="relative">
           <Input type={showHidePassword == true?"text":"password"} name={"password"} placeholder={"Enter your Password"} />
           {showHidePassword == true?<i onClick={() => setShowHidePassword(!showHidePassword)} className="fa-regular absolute right-4 top-[18px] fa-eye-slash"></i>
           :<i onClick={() => setShowHidePassword(!showHidePassword)} className="fa-regular absolute right-4 top-[18px] fa-eye"></i>}
         </div>
       </div>
       <button type="submit" className="w-full bg-[#2D88D4] text-white font-[700] rounded-md py-3 px-4 hover:bg-blue-600 transition-colors">Login</button>
       <Link to="/register" className="text-[#1DA1F2] block py-3 text-center cursor-pointer">
              Sign up
        </Link>
     </form>
  </div>
 </div>
  );
}

export default Login;
