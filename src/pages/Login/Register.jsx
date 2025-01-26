import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const {formData, setFormData} = useContext(Context);
  const [showHidePassword,setShowHidePassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { 
      id: formData.length + 1,
      image:'https://cdn-icons-png.flaticon.com/512/64/64572.png',
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
    }
    if (data.email && data.password && data.name) {
      const updatedFormData = [...formData, data];
      setFormData(updatedFormData);
      localStorage.setItem('login',JSON.stringify(updatedFormData))
      e.target.reset()
      navigate(-1)
      toast.success(`Hi everyone ${data.name} data success`);
    }
    else{ 
      toast.error(`error input`);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-[36px] font-[600] text-center ">Welcome, Sign up</h1>
     <div className="bg-white h-[496px] w-[512px] mt-10 flex justify-center items-center">
        <Toaster position="top-center" reverseOrder={true} />
        <form onSubmit={handleSubmit} className="w-[248px]">
      <p className="text-[#667085] text-center">It is our great pleasure to have you on board! </p>
          <div className="space-y-4 my-8">
              <Input type={"email"} name={"email"} placeholder={"Enter your Email"} />
            <Input type={"name"} name={"name"} placeholder={"Create your Login"} />
            <div className="relative">
              <Input type={showHidePassword == true?"text":"password"} name={"password"} placeholder={"Create your Password"} />
              {showHidePassword == true?<i onClick={() => setShowHidePassword(!showHidePassword)} className="fa-regular absolute right-4 top-[18px] fa-eye-slash"></i>
              :<i onClick={() => setShowHidePassword(!showHidePassword)} className="fa-regular absolute right-4 top-[18px] fa-eye"></i>}
            </div>
          </div>
          <button type="submit" className="w-full bg-[#2D88D4] text-white font-[700] rounded-md py-3 px-4 hover:bg-blue-600 transition-colors">Sign up</button>
        </form>
     </div>
    </div>
  );
}

export default Register;