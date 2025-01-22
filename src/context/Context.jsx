import { children , createContext , useState } from "react"
export const Context = createContext()
export const TokenContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null)
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('login')) || []);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [urlImg, setUrlImg] = useState(null);
    localStorage.setItem('token',JSON.stringify(token))
    localStorage.setItem('user',JSON.stringify(user))
    return(
        <Context.Provider value={{token,setToken,setUser,urlImg,setUrlImg,formData,setFormData,user}}>
            {children}
        </Context.Provider>
    )
}