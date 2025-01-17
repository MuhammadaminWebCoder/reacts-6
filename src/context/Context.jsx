import { children , createContext , useState } from "react"
export const Context = createContext()
export const TokenContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || null)
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('login')) || []);
    localStorage.setItem('token',JSON.stringify(token))
    return(
        <Context.Provider value={{token,setToken,formData,setFormData}}>
            {children}
        </Context.Provider>
    )
}