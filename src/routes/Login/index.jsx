import React from 'react'
import {LoginRoutes} from '../../hooks/useRoute'
import { Route, Routes } from 'react-router-dom'
const LoginRoute = () => {
    return (
        <Routes>
            {LoginRoutes.map(({path,element,id}) => <Route key={id} path={path} element={element}/>)}
        </Routes>
    )
}

export default LoginRoute
