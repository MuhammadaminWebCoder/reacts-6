import React, { useContext, useState } from 'react';
import { Context } from '../../../context/Context';
import { PATH } from '../../../hooks/usePath';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function TeachersAddForm() {
  const { allData, setAllData } = useContext(Context);
  const [imgPreview, setImgPreview] = useState(null); 
  const navigate = useNavigate()

  const submitAddData = (e) => {
    e.preventDefault();

    const formData = {
      id: allData.length + 1,
      name: e.target.name.value,
      email: e.target.email.value,
      about: e.target.about.value,
      subject: e.target.subject.value,
      class: e.target.class.value,
      gender: e.target.gender.value,
      age: e.target.age.value,
      img: imgPreview,
    };
    if (formData.name && formData.email) {
      setAllData((prevData) => {
        const updatedData = [...prevData, formData];
        localStorage.setItem('teacherData', JSON.stringify(updatedData)); 
        return updatedData;
      });
      e.target.reset();
      setImgPreview(null); 
      setTimeout(() => {
        navigate(PATH.TeachersListForm);
      }, 500);
      toast.success(`okey add form`);
    }
    else{
      toast.error(`error email and name requider`);
    }
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file.name.includes('.png') || file.name.includes('.svg')) {
      const imageUrl = URL.createObjectURL(file);
      setImgPreview(imageUrl);
    }
    else{
      toast.error(`error img png or svg`);
    }
  };
  

  return (
    <form onSubmit={submitAddData}>
      <div className="flex items-center justify-between py-3">
        <p className="text-xl">Add Teacher</p>
      <Toaster position="top-center" reverseOrder={true} />
        <button
          type="submit"
          className="py-3 px-5 rounded-md text-white bg-[#509CDB]"
        >
          Save
        </button>
      </div>
      <div className="flex space-x-10">
        <div className="space-y-5 w-[450px]">
          <div>
            <p>Full Name</p>
            <input
              type="text"
              className="p-2.5 rounded-md outline-0 w-full border"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div>
            <p>Email Address</p>
            <input
              type="email"
              className="p-2.5 rounded-md outline-0 w-full border"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <p>Subject</p>
            <select
              className="p-2.5 rounded-md outline-0 w-full border"
              name="subject"
            >
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
          </div>
          <div>
            <p>About</p>
            <textarea
              className="p-2.5 rounded-md outline-0 min-h-[172px] w-full border"
              name="about"
              placeholder="About"
            />
          </div>
        </div>
        <div className="space-y-5 w-[450px]">
          <div>
            <p>Class</p>
            <select
              className="p-2.5 rounded-md outline-0 w-full border"
              name="class"
            >
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
            </select>
          </div>
          <div>
            <p>Gender</p>
            <select
              className="p-2.5 rounded-md outline-0 w-full border"
              name="gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <p>Age</p>
            <input
              type="number"
              className="p-2.5 rounded-md outline-0 w-full border"
              name="age"
              placeholder="Age"
            />
          </div>
          <label className="py-5 block">
            <p className="text-xl">Import Image</p>
            <input
              onChange={handleImgChange}
              type="file"
              name="file"
              className="hidden"
            />
            {imgPreview && (
              <img
                src={imgPreview}
                alt="Preview"
                className="mt-3 w-20 h-20 object-cover rounded-md"
              />
            )}
          </label>
        </div>
      </div>
    </form>
  );
}

export default TeachersAddForm;
