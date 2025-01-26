import React, { createContext, useState } from 'react';

export const Context = createContext();
export const TokenContext = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null); 
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('login')) || []); 
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('teacherData')) || []);

    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));

    return (
        <Context.Provider value={{token,setToken,formData,setFormData,user,setUser,openModal,setOpenModal,data,setData,allData,allData,setAllData}}>
            {children}
        </Context.Provider>
    );
};
