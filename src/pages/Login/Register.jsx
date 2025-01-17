import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

function Register() {
  const [useEmail,setUseEmail] = useState()
  const {formData, setFormData} = useContext(Context);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault();
    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      month: e.target.month.value,
      day: e.target.day.value,
      year: e.target.year.value
    }
    const updatedFormData = [...formData, data];
    setFormData(updatedFormData);
    localStorage.setItem('login',JSON.stringify(updatedFormData))
    e.target.reset()
    navigate(-1)
  };
const date =  Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)
const dateDay = Array.from({ length: 31 }, (_, i) => i + 1)
const dateMoth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (

    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
      <i className="fa-brands text-center text-4xl block text-blue-500 fa-twitter"></i>
        <h1 className="text-3xl font-bold mb-8">Create an account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input type={"name"} name={"name"} placeholder={"Name"} />
            <Input type={"tel"} name={"phone"} placeholder={"Phone Number"} />
            <Input type={"password"} name={"password"} placeholder={"Password"} />
            {useEmail && <Input type={"email"} name={"email"} placeholder={"Email"} />}
            <div className="flex justify-between">
            <p onClick={() => setUseEmail(!useEmail)} className="text-[#1DA1F2] text-sm cursor-pointer hover:underline">{useEmail?'hide email':'Use email'}</p>
            <Link to={'/'} className="text-[#1DA1F2] text-sm cursor-pointer hover:underline">Log in</Link>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Date of birth</p>
              <p className="text-xs text-gray-500 mb-2">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
              <div className="flex gap-4">
                <select
                  name="month"
                  className=" border w-[312px] rounded-md px-4 py-3 focus:outline-none focus:border-[#1DA1F2]">
                  <option value="">Month</option>
                  {dateMoth.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  name="day"
                  className="border w-[159px] rounded-md px-4 py-3 focus:outline-none focus:border-[#1DA1F2]">
                  <option value="">Day</option>
                  {dateDay.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select
                  name="year"
                  className="border w-[159px] rounded-md px-4 py-3 focus:outline-none focus:border-[#1DA1F2]">
                  <option value="">Year</option>
                 {date.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold rounded-full py-3 px-4 hover:bg-blue-600 transition-colors">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Register;