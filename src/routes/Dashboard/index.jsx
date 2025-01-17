import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { dashboardRouteList } from '../../hooks/useRoute'
const DashboardRouter = () => {

    return (
        <Routes>
            {dashboardRouteList.map(({path,element,id}) => <Route key={id} path={path} element={element}/>)}
        </Routes>
    )
}

export default DashboardRouter
