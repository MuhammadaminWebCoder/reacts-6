import React, { useContext, useState } from 'react';
import { Context } from '../../../context/Context';
import emptyImg from '../../../assets/image/empotyImg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { PATH } from '../../../hooks/usePath';

function TeachersListForm() {
  const { allData,setAllData } = useContext(Context);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  console.log(allData);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const deleteTeacher = (id) => {
    setAllData((prevData) => prevData.filter((teacher) => teacher.id !== id));
  };

  const editTeacher = (id) => {
    console.log("Edit id ", id);
  };

  const moreInfo = (id) => {
    navigate(`/Teachers/more/${id}`);
  };
  
  const filteredData = allData?.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
    teacher.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <p className="text-xl">Teachers</p>
        <NavLink to={PATH.TeachersAddForm} className="py-3 px-5 rounded-md text-white bg-[#509CDB]">Add Teachers</NavLink>
      </div>
      <div className="inp relative">
        <i className="fa-solid fa-search absolute -translate-y-[50%] left-4 text-slate-500 top-[50%]"></i>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="py-3 px-12 placeholder-slate-500 w-full rounded-md !bg-[#FCFAFA] outline-0"
          placeholder="Search for a teacher by name or email"
        />
      </div>

      {filteredData.length === 0 ? (
        <div className="bg-[#FCFAFA] mt-5 w-full h-[419px] flex-col flex items-center justify-center">
          <img src={emptyImg} alt="empty img" />
          <p className="text-2xl mt-2">No Teachers at this time</p>
          <p>Teachers will appear here after they enroll in your school.</p>
        </div>
      ) : (
        <div className="overflow-y-auto mt-7">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-5 text-left">Name</th>
                <th className="px-4 py-5 text-left">Subject</th>
                <th className="px-4 py-5 text-left">Class</th>
                <th className="px-4 py-5 text-left">Email address</th>
                <th className="px-4 py-5 text-left">Gender</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((teacher, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img
                        src={teacher.img || emptyImg}
                        alt={teacher.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      {teacher.name}
                    </div>
                  </td>
                  <td className="px-4 py-2">{teacher.subject}</td>
                  <td className="px-4 py-2">{teacher.class}</td>
                  <td className="px-4 py-2">{teacher.email}</td>
                  <td className="px-4 py-2">{teacher.gender}</td>
                  <td className="px-4 flex justify-center py-2 text-white space-x-5">
                    <button onClick={() => editTeacher(teacher.id)} className="py-2.5 px-5 rounded-md bg-green-500">Edit</button>
                    <button onClick={() => deleteTeacher(teacher.id)} className="py-2.5 px-5 rounded-md bg-red-500">Delete</button>
                    <button onClick={() => moreInfo(teacher.id)} className="py-2.5 px-5 rounded-md bg-slate-400">More</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TeachersListForm;
